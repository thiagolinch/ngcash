import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStatementUseCase } from "./getStatementUseCase";



class GetStatementController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const getStatementUseCase = container.resolve(GetStatementUseCase)

        try {
            const statement = await getStatementUseCase.execute(id)
            return response.status(200).json(statement)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}

export { GetStatementController }