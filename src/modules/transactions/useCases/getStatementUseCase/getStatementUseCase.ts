import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../users/repository/IUserRepository";
import { Transaction } from "../../entities/transaction";
import { ITransactionRepository } from "../../repository/ITransactionRepository";


@injectable()
class GetStatementUseCase {
    constructor(
        @inject("TransactionRepository")
        private TransactionRep: ITransactionRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<Transaction[]> {
        const user = await this.userRepository.findById(id)
        const userAcccountId = user.account_id
        return await this.TransactionRep.getStatement(userAcccountId)
    }
}

export { GetStatementUseCase }