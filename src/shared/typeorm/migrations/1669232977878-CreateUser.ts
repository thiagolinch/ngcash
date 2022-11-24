import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1669232977878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "username",
                            type: "varchar"
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "account_id",
                            type: "uuid"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKAccountID",
                            referencedTableName: "accounts",
                            referencedColumnNames: ["id"],
                            columnNames: ["account_id"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
