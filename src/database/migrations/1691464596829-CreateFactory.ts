import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFactory1691464596829 implements MigrationInterface {
    name = 'CreateFactory1691464596829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hospital_users\` (\`user_id\` bigint NOT NULL AUTO_INCREMENT, \`username\` varchar(50) NOT NULL COMMENT 'Username', \`password\` varchar(25) NOT NULL COMMENT 'User password', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_doctors\` (\`personal_id\` bigint NOT NULL AUTO_INCREMENT, \`member_number\` bigint NOT NULL COMMENT 'numero_colegiado', \`name\` varchar(50) NOT NULL COMMENT 'nombres', \`lastame\` varchar(50) NOT NULL COMMENT 'apellidos', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` bigint NULL, UNIQUE INDEX \`REL_e8ec91f39d1e6621794d0d3086\` (\`user_id\`), PRIMARY KEY (\`personal_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD CONSTRAINT \`FK_e8ec91f39d1e6621794d0d30864\` FOREIGN KEY (\`user_id\`) REFERENCES \`hospital_users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP FOREIGN KEY \`FK_e8ec91f39d1e6621794d0d30864\``);
        await queryRunner.query(`DROP INDEX \`REL_e8ec91f39d1e6621794d0d3086\` ON \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_users\``);
    }

}
