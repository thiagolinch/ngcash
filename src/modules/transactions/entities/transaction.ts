import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("transactions")
class Transaction {

    @PrimaryColumn("uuid")
    id: string;

    @Column("uuid")
    debitedAccountId!: string;

    @Column("uuid")
    creditedAccountId!: string;

    @Column("decimal")
    value!: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    constructor() {
        this.id = this.id ?? uuidV4();
    }
}

export { Transaction };
