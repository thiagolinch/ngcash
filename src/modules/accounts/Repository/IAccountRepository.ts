import { Account } from "../entities/Account"


interface IAccountRepository {

    create(): Promise<Account>;
    findById(id: string): Promise<Account>;
}

export { IAccountRepository }