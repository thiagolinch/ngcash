import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { Account } from "../../accounts/entities/Account";


@Entity("users")//users
class User {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar")
    username: string;

    @Column("varchar")
    password: string;

    @OneToOne(() => Account)
    @JoinColumn({name: "account_id"})
    account: Account


    @Column("uuid")
    account_id: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { User }