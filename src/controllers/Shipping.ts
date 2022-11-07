import { Request, Response } from "express";
import { generate } from "../conf/generate";
import { users } from "../mock/User";
import { AES } from "../utils/aes";
import { JWT } from "../utils/jwt";


class Shipping {

    async Calculate(request: Request, response: Response) {

    }

}

export { Shipping };