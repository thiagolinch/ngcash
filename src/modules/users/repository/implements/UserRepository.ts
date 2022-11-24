import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository, UserRepositoryDTO } from "../IUserRepository";



class UserRepository implements IUserRepository {
    private respository: Repository<User>

    constructor() {
        this.respository = getRepository(User)
    }

    async create({ username, password, account_id }: UserRepositoryDTO): Promise<User> {
        const user = this.respository.create({
            username,
            password,
            account_id
        })

        await this.respository.save(user)

        return user
    };

    async findByUserName(username: string): Promise<User> {
        return await this.respository.findOne({username})
    }

    async findById(id: string): Promise<User> {
        return await this.respository.findOne({id})
    }

}

export { UserRepository }