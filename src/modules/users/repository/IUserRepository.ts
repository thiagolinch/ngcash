import { User } from "../entities/User";


interface UserRepositoryDTO {
    username: string;
    password: string;
    account_id?: string;
}

interface IUserRepository {
    
    create({username, password, account_id}: UserRepositoryDTO): Promise<User>;
    findByUserName(username: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUserRepository, UserRepositoryDTO }