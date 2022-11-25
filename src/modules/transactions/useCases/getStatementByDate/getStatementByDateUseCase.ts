import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";
import { IUserRepository } from "../../../users/repository/IUserRepository";
import { Transaction } from "../../entities/transaction";
import { ITransactionRepository } from "../../repository/ITransactionRepository";


@injectable()
class GetStatementByDateUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRep: ITransactionRepository,
        @inject("UserRepository")
        private userRepo: IUserRepository,
        @inject("DaysJSDateProvider")
        private dayJsProv: IDateProvider
    ) {}

    async execute(id: string, period: Date, typeOfTransaction: string): Promise<Transaction[]> {
        const user = await this.userRepo.findById(id)
        const userAccountId = user.account_id;

        if(!typeOfTransaction) {
            return await this.transactionRep.getStatementByDate(userAccountId, period)
        }

        if(typeOfTransaction === "cashOut") {
            return await this.transactionRep.getStatementByDateAndOut(userAccountId, period)
        }

        if(typeOfTransaction === "cashIn") {
            return await this.transactionRep.getStatementByDateAndIn(userAccountId, period)
        }
    }
}

export { GetStatementByDateUseCase }