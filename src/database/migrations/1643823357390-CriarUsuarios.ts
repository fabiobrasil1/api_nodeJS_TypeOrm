import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarUsuarios1643823357390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: ' nome',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'idade',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true,
                    },
                    {
                        name: 'profissao',
                        type: 'string',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }
}
