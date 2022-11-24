import { Account } from "../entities/Account"


interface IAccountRepository {

    create(): Promise<Account>;
    findById(id: string): Promise<Account>;
    updateBalance(id: string, balance: number): Promise<void>;
}

export { IAccountRepository }