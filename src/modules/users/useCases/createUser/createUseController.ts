import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";



class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        try {
            const user = await createUserUseCase.execute({username, password})
            return response.status(200).json(user)
        } catch (error) {
            return response.status(200).json(error)
        }
    }

}

export { CreateUserController }