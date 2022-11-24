import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "../../../accounts/Repository/IAccountRepository";
import { IUserRepository } from "../../../users/repository/IUserRepository";
import { ITransactionDTO, ITransactionRepository } from "../../repository/ITransactionRepository";

interface IRequest {
    debitedUserId: string,
    creditedUserName: string,
    value: number
}

@injectable()
class CashOutUseCase {
    constructor(
        @inject("UserRepository")
        private userRep: IUserRepository,
        @inject("AccountRepository")
        private accountRep: IAccountRepository,
        @inject("TransactionRepository")
        private transactionRep: ITransactionRepository
    ) {}

    async execute({debitedUserId, creditedUserName, value}: IRequest): Promise<void> {
        const debitedUser = await this.userRep.findById(debitedUserId);
        const creditedUser = await this.userRep.findByUserName(creditedUserName);


        const debitedAccountId = debitedUser.account_id
        const creditedAccountId = creditedUser.account_id

        if(!creditedUser) {
            throw new Error("The user you want to pay does not exists!").message
        }

        if(debitedAccountId === creditedAccountId){
            throw new Error("Unable to send money to yourself").message
        }

        if(debitedUser.account.balance < value) {
            throw new Error("insufficient funds!").message
        }

        const transactionCreated = await this.transactionRep.cashOut({debitedAccountId, creditedAccountId, value})

        if(!transactionCreated) {
            throw new Error("Transaction Failed!").message
        }

        const newDebtUserBalance = Number(debitedUser.account.balance) - value;
        await this.accountRep.updateBalance(debitedAccountId, newDebtUserBalance);

        const newCredtUserBalance = value += Number(creditedUser.account.balance);
        await this.accountRep.updateBalance(creditedAccountId, newCredtUserBalance);

    }
}

export { CashOutUseCase }