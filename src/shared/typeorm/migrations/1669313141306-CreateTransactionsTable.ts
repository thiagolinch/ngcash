import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactionsTable1669313141306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "transactions",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "debitedAccountId",
                            type: "uuid"
                        },
                        {
                            name: "creditedAccountId",
                            type: "uuid"
                        },
                        {
                            name: "value",
                            type: "float"
                        },
                        {
                            name: "createdAt",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKDebitedAccount",
                            referencedTableName: "accounts",
                            referencedColumnNames: ["id"],
                            columnNames: ["debitedAccountId"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        },
                        {
                            name: "FKCreditedAccount",
                            referencedTableName: "accounts",
                            referencedColumnNames: ["id"],
                            columnNames: ["creditedAccountId"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions")
    }

}
