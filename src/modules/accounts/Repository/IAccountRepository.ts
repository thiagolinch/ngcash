import { Account } from "../entities/Account"


interface IAccountRepository {

    create(): Promise<Account>;
}

export { IAccountRepository }