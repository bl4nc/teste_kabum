import * as jwt from 'jsonwebtoken'

const secret: jwt.Secret = (process.env.JWT_SECRET) as string

class JWT {

    encode_jwt(payload: any) {
        try {
            const token = jwt.sign(payload, secret)
            return token
        } catch (error) {
            return error
        }
    }

    decode_jwt(token: string) {
        try {
            const decode = jwt.verify(token, secret)
            return decode
        } catch (error) {
            return error
        }
    }
}

export { JWT }