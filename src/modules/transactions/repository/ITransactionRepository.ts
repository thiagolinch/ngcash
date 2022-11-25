import { Transaction } from "../entities/transaction";

interface ITransactionDTO {
    debitedAccountId: string,
    creditedAccountId: string,
    value: number
}

interface ITransactionRepository {

    cashOut({debitedAccountId, creditedAccountId, value}: ITransactionDTO): Promise<Transaction>;
    getStatement(id:string): Promise<Transaction[]>
}

export { ITransactionRepository, ITransactionDTO }