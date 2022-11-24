import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import auth from "../../../config/auth";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    // Preciso recuperar do header a info do toker do user
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, auth.secret) as IPayLoad;

        request.user = {
            id: user_id
        }

        next()
    }catch{
      throw new Error("Invalid token!")
    }
}