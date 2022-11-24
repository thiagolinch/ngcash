import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"


@Entity("transactions") //transactions
class Transaction {

    @PrimaryColumn()
    id?: string;

    @Column()
    debitedAccountId: string;

    @Column()
    creditedAccountId: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
    
}

export { Transaction }