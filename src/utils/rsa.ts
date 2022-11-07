import * as crypto from "crypto"
import * as fs from "fs"

class RSA {

    encode(data: {}) {
        const pub = (fs.readFileSync("src/conf/pub")).toString()
        const buffer = Buffer.from(JSON.stringify(data),'utf8')
        const encrypt = crypto.publicEncrypt(pub, buffer)
        return encrypt
    }

    decode(hash: string) {
        const priv = (fs.readFileSync("src/conf/priv")).toString()
        const rsaPrivateKey = {
            key: priv,
            passphrase: '',
            padding: crypto.constants.RSA_PKCS1_PADDING,
        };
        const decoded = crypto.privateDecrypt(
            rsaPrivateKey,
            Buffer.from(hash, "base64"),
        );
        return decoded
    }

}

export { RSA }
