const crypto = require('crypto-js'), password = process.env.AES_SECRET;

class AES {

    encode(data: {}) {
        const json_to_string = JSON.stringify(data)
        const encrypted = crypto.AES.encrypt(json_to_string, password)
        const result = encrypted.toString()
        return result;
    }

    decode(token: string) {
        const decrypted = crypto.AES.decrypt(token, password);
        const result = decrypted.toString(crypto.enc.Utf8)
        return result;
    }

}

export { AES }
