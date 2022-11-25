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

}

export { TransactionRepository }