import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "../../../accounts/Repository/IAccountRepository";
import { IUserRepository } from "../../repository/IUserRepository";

interface IResponse {
    balance: string;
}

interface IRequest {
    user_id: string;
}


@injectable()
class GetBalanceUseCase {
    constructor(
        @inject("AccountRepository")
        private accountRepository: IAccountRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({user_id}: IRequest): Promise<void> {
        // verificar a propriedade da conta usando o id logado
        const user = await this.userRepository.findById(user_id)
        console.log(user)
    }
}

export { GetBalanceUseCase }