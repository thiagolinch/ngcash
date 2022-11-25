import { getRepository, Repository } from "typeorm";

import { Transaction } from "../../entities/transaction";
import { ITransactionDTO, ITransactionRepository } from "../ITransactionRepository";


class TransactionRepository implements ITransactionRepository {
    private repository: Repository<Transaction>

    constructor() {
        this.repository = getRepository(Transaction)
    }

    async cashOut({ debitedAccountId, creditedAccountId, value }: ITransactionDTO): Promise<Transaction> {
        const transaction = this.repository.create({
            debitedAccountId,
            creditedAccountId,
            value
        });

        await this.repository.save(transaction)

        return transaction
    }

    async getStatement(id: string): Promise<Transaction[]> {
        return await this.repository.createQueryBuilder("transactions").
        where("transactions.debitedAccountId = :id", {id}).
        orWhere("transactions.creditedAccountId = :id", {id}).getMany()
    }

    async getStatementByDate(userAccountId: string, period: Date): Promise<Transaction[]> {
        return await this.repository.query(
            `SELECT * FROM transactions WHERE ("createdAt")='${period}' AND 
            (("debitedAccountId")='${userAccountId}' OR ("creditedAccountId")='${userAccountId}')`
        )
    }

    async getStatementByDateAndOut(userAccountId: string, period: Date): Promise<Transaction[]> {
        return await this.repository.createQueryBuilder("t").
        where("t.createdAt = :createdAt", {createdAt: period}).
        andWhere("t.debitedAccountId = :debitedAccountId", {debitedAccountId: userAccountId}).
        getMany();
    }

    async getStatementByDateAndIn(userAccountId: string, period: Date): Promise<Transaction[]> {
        return await this.repository.createQueryBuilder("t").
        where("t.createdAt = :createdAt", {createdAt: period}).
        andWhere("t.creditedAccountId = :creditedAccountId", {creditedAccountId: userAccountId}).
        getMany();
    }

}

export { TransactionRepository }