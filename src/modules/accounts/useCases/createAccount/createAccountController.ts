import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAccountUseCase } from "./createAccountUseCase";


class CreateAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        const createAccount = container.resolve(CreateAccountUseCase)

        const account = await createAccount.execute()

        return response.status(200).send(account)
    }
}

export { CreateAccountController }