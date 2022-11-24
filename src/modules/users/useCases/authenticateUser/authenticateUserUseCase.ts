import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";
import { IUserRepository } from "../../repository/IUserRepository";
import { IUsersTokensRepository } from "../../repository/IUserTokenRepository";


interface IRequest {
    username: string;
    password: string;
}

// Como quero enviar a resposta, lembrando de nao passar a senha
interface IResponse {
    token: string;
    refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("UsersTokenRepository")
        private userTokenRepository: IUsersTokensRepository,
        @inject("DaysJSDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute({username, password}: IRequest): Promise<IResponse> {
        // Username correto
        const user = await this.userRepository.findByUserName(username);
        const { expires_in_token, secret, secret_refresh_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        if(!user) {
            throw new Error("Username or Password invalid")
        }

        // Senha correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Username or Password invalid")
        }

        // Gerar o JSON Web Token, enviando o id pelo subject do payload e
        // definindo a validade do token = 1 dia.
        const token = sign({}, secret,{
            subject: user.id, // subject to sendo to payload
            expiresIn: expires_in_token  // tempo para esse token expirar
        })

        const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days)

        const refresh_token = sign({ username }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token
        })

        await this.userTokenRepository.create({
            user_id: user.id,
            expires_date: refresh_token_expires_date,
            refresh_token: refresh_token
        })

        // criei essa instancia para organizar os dados a serem retornados a fim de
        // protejer dados criticos como a senha e outros.
        const tokenReturn: IResponse = {
            token,
            refresh_token
        }
        
        // estou retornando os dados da maneira que defini a fim de nao enviar dados criticos como senha.
        return tokenReturn; 
    }
}

export { AuthenticateUserUseCase }