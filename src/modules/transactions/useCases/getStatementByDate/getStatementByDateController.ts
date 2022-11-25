import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStatementByDateUseCase } from "./getStatementByDateUseCase";


class GetStatementByDateController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const {period, typeOfTransaction} = request.body;

        const getStatementByDateUseCase = container.resolve(GetStatementByDateUseCase)

        try {
            const statement = await getStatementByDateUseCase.execute(id, period, typeOfTransaction)
            return response.status(200).json(statement)
        } catch (error) {
            return response.status(400).json({error})
        }
    }
}

export { GetStatementByDateController }