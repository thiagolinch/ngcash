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

}

export { TransactionRepository }