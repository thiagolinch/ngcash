import { hash } from "bcryptjs"
import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "../../../accounts/Repository/IAccountRepository";

import { User } from "../../entities/User";
import { IUserRepository, UserRepositoryDTO } from "../../repository/IUserRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("AccountRepository")
        private accountRepository: IAccountRepository
    ) {}

    async execute({username, password}: UserRepositoryDTO): Promise<User> {
        const userExists = await this.userRepository.findByUserName(username)

        if(userExists) {
            throw new Error("User already exists").message
        }

        if(username.length < 3) {
            throw new Error("This username is too short, try another one!").message
        }

        if(password.length < 8) {
            throw new Error("Password must be at least 8 characters").message
        }

        const accont = await this.accountRepository.create()
        const accountId = accont.id
        
        const passwordHash = await hash(password, 8);

        const user = await this.userRepository.create({
            username,
            password: passwordHash,
            account_id: accountId
        })

        return user;
    }

}

export { CreateUserUseCase }