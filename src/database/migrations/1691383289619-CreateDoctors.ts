import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDoctors1691383289619 implements MigrationInterface {
    name = 'CreateDoctors1691383289619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hospital_doctors\` (\`user_id\` bigint NOT NULL AUTO_INCREMENT, \`user_id\` bigint NOT NULL COMMENT 'numero_colegiado', \`name\` varchar(50) NOT NULL COMMENT 'nombres', \`lastame\` varchar(50) NOT NULL COMMENT 'apellidos', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` CHANGE \`user_id\` \`user_id\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD \`user_id\` bigint NOT NULL COMMENT 'numero_colegiado'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD \`user_id\` bigint NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD PRIMARY KEY (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` CHANGE \`user_id\` \`user_id\` bigint NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`DROP TABLE \`hospital_doctors\``);
    }

}
