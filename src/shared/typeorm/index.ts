import { createConnection, getConnectionOptions } from 'typeorm';
import { Account } from '../../modules/accounts/entities/Account';
import { User } from '../../modules/users/entities/User';
import { UserTokens } from '../../modules/users/entities/UserToken';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_ngcash'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
		entities: [
			Account,
      User,
      UserTokens
		]
  });
});