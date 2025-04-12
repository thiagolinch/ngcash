import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

import { User } from "./User";


@Entity("users_tokens")
class UserTokens {

    @PrimaryColumn("uuid")
    id: string;

    @Column("uuid")
    refresh_token: string;

    @Column("uuid")
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;

    @CreateDateColumn()
    expires_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { UserTokens }