import { inject, injectable } from "tsyringe";
import { Account } from "../../../accounts/entities/Account";
import { IAccountRepository } from "../../../accounts/Repository/IAccountRepository";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repository/IUserRepository";

interface IResponse {
    balance: number;
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

    async execute({user_id}: IRequest): Promise<User> {
        // verificar a propriedade da conta usando o id logado
        const user = await this.userRepository.findById(user_id)
        console.log(user)

        // puxar o balance baseado no account_id do user
        const account = await this.accountRepository.findById(user.account_id)

        return user
    }
}

export { GetBalanceUseCase }