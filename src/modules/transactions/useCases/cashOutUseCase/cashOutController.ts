import { Request, Response } from "express";
import { container } from "tsyringe";

import { CashOutUseCase } from "./cashOutUseCase";


class CashOutController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const {creditedUserName, value} = request.body;
        console.log(creditedUserName, value)
        const cashOutUseCase = container.resolve(CashOutUseCase);

        try {
            await cashOutUseCase.execute({debitedUserId: id, creditedUserName, value})
            return response.status(200).send()
        } catch (error) {
            return response.status(400).json(error)
        };
    }
}

export { CashOutController }