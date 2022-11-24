import { container } from "tsyringe";

import "./providers"

import { IAccountRepository } from "../../modules/accounts/Repository/IAccountRepository";
import { AccountRepository } from "../../modules/accounts/Repository/implements/AccountRepository";

import { UserRepository } from "../../modules/users/repository/implements/UserRepository";
import { UsersTokenRepository } from "../../modules/users/repository/implements/UserTokenRepository";

import { IUserRepository } from "../../modules/users/repository/IUserRepository";
import { IUsersTokensRepository } from "../../modules/users/repository/IUserTokenRepository";


import { ITransactionRepository } from "../../modules/transactions/repository/ITransactionRepository";
import { TransactionRepository } from "../../modules/transactions/repository/implements/TransactionRepository";

container.registerSingleton<IAccountRepository>(
    "AccountRepository",
    AccountRepository
)

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokenRepository",
    UsersTokenRepository
)

container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
)