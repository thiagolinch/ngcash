import { Transaction } from "../entities/transaction";

interface ITransactionDTO {
    userAccountId: string,
    debitedAccountId: string,
    creditedAccountId: string,
    value: number,
    createdAt: Date,
    period: Date
}

interface ITransactionRepository {

    cashOut({debitedAccountId, creditedAccountId, value}: ITransactionDTO): Promise<Transaction>;
    getStatement(id:string): Promise<Transaction[]>;
    getStatementByDate(userAccountId: string, period: Date): Promise<Transaction[]>;
    getStatementByDateAndOut(userAccountId: string, period: Date): Promise<Transaction[]>;
    getStatementByDateAndIn(userAccountId: string, period: Date): Promise<Transaction[]>;
}

export { ITransactionRepository, ITransactionDTO }