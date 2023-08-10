import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFactory1691464596829 implements MigrationInterface {
    name = 'CreateFactory1691464596829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hospital_users\` (\`user_id\` bigint NOT NULL AUTO_INCREMENT, \`username\` varchar(50) NOT NULL COMMENT 'Username', \`password\` varchar(25) NOT NULL COMMENT 'User password', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_doctors\` (\`personal_id\` bigint NOT NULL AUTO_INCREMENT, \`member_number\` bigint NOT NULL COMMENT 'numero_colegiado', \`name\` varchar(50) NOT NULL COMMENT 'nombres', \`lastame\` varchar(50) NOT NULL COMMENT 'apellidos', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` bigint NULL, UNIQUE INDEX \`REL_e8ec91f39d1e6621794d0d3086\` (\`user_id\`), PRIMARY KEY (\`personal_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_specializations\` (\`specialization_id\` bigint NOT NULL AUTO_INCREMENT, \`description\` varchar(50) NOT NULL COMMENT 'descripción', PRIMARY KEY (\`specialization_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medpatients\` (\`patient_id\` bigint NOT NULL AUTO_INCREMENT, \`identification\` bigint NOT NULL COMMENT 'CUI', \`first_name\` varchar(50) NOT NULL COMMENT 'primer nombre', \`second_name\` varchar(50) NOT NULL COMMENT 'segundo nombre', \`lastame\` varchar(50) NOT NULL COMMENT 'primer apellido', \`second_lastame\` varchar(50) NOT NULL COMMENT 'segundo apellido', \`dof\` timestamp(6) NOT NULL COMMENT 'Fecha de nacimiento' DEFAULT CURRENT_TIMESTAMP(6), \`address\` varchar(50) NOT NULL COMMENT 'dirección residencia', \`phone\` bigint NOT NULL COMMENT 'número de teléfono', \`email\` varchar(50) NOT NULL COMMENT 'dirección correo', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`patient_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD CONSTRAINT \`FK_e8ec91f39d1e6621794d0d30864\` FOREIGN KEY (\`user_id\`) REFERENCES \`hospital_users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP FOREIGN KEY \`FK_e8ec91f39d1e6621794d0d30864\``);
        await queryRunner.query(`DROP TABLE \`hospital_medpatients\``);
        await queryRunner.query(`DROP TABLE \`hospital_specializations\``);
        await queryRunner.query(`DROP INDEX \`REL_e8ec91f39d1e6621794d0d3086\` ON \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_users\``);
    }

}
