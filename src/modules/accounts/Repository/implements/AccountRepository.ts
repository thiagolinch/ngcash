import { getRepository, Repository } from "typeorm";
import { Account } from "../../entities/Account";
import { IAccountRepository } from "../IAccountRepository";



class AccountRepository implements IAccountRepository {
    private repository: Repository<Account>

    constructor() {
        this.repository = getRepository(Account)
    }

    async create(): Promise<Account> {
        const account = this.repository.create();

        await this.repository.save(account)

        return account;
    }

}

export { AccountRepository }