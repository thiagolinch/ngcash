import { injectable, inject } from "tsyringe"

import { Account } from "../../entities/Account";
import { IAccountRepository } from "../../Repository/IAccountRepository"

@injectable()
class CreateAccountUseCase {
    constructor(
        @inject("AccountRepository")
        private accountRepository: IAccountRepository
    ) {}

    async execute(): Promise<Account> {
        const account = await this.accountRepository.create()

        return account;
    }
}

export { CreateAccountUseCase }