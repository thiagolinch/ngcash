import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";



@Entity("accounts")//accounts
class Account {

    @PrimaryColumn()
    id?: string;

    @Column()
    balance: number;

    constructor() {
        if(!this.id){
            this.id = uuidV4(),
            this.balance = 100.00
        }
    }
}

export { Account }