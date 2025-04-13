import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("accounts")
class Account {

  @PrimaryColumn("uuid")
  id?: string;

  @Column("decimal", { precision: 10, scale: 2, default: 100 })
  balance?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.balance = 100
    }
  }
}

export { Account };
