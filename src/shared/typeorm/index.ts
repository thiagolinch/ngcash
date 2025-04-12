import { createConnection, getConnectionOptions } from 'typeorm';

import { Account } from '../../modules/accounts/entities/Account';
import { Transaction } from '../../modules/transactions/entities/transaction';
import { User } from '../../modules/users/entities/User';
import { UserTokens } from '../../modules/users/entities/UserToken';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'projetos-tl.c7i88oiykryo.us-east-2.rds.amazonaws.com'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
		entities: [
			Account,
      User,
      UserTokens,
      Transaction
		]
  });
});