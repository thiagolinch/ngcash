import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { Account } from "../../accounts/entities/Account";


@Entity("users")//users
class User {

    @PrimaryColumn()
    id?: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    account_id: string;

    @OneToOne(() => Account)
    @JoinColumn({name: "account_id"})
    account: Account

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { User }