import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFactory1691464596829 implements MigrationInterface {
    name = 'CreateFactory1691464596829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hospital_roles\` (\`role_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL COMMENT 'nombres', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_typologies\` (\`typology_id\` bigint NOT NULL COMMENT 'Id de tipología', \`description\` varchar(255) NOT NULL COMMENT 'Descripción de la tipología', \`creation_date\` timestamp(6) NOT NULL COMMENT 'Fecha de creación' DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`status\` bigint NULL COMMENT 'Id de tipología', PRIMARY KEY (\`typology_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_users\` (\`user_id\` bigint NOT NULL AUTO_INCREMENT, \`username\` varchar(50) NOT NULL COMMENT 'Username', \`password\` varchar(25) NOT NULL COMMENT 'User password', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`role_id\` bigint NULL, \`status\` bigint NULL COMMENT 'Id de tipología', PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_specializations\` (\`specialization_id\` bigint NOT NULL AUTO_INCREMENT, \`description\` varchar(50) NOT NULL COMMENT 'descripción', PRIMARY KEY (\`specialization_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_doctors\` (\`personal_id\` bigint NOT NULL AUTO_INCREMENT, \`member_number\` bigint NOT NULL COMMENT 'numero_colegiado', \`name\` varchar(50) NOT NULL COMMENT 'nombres', \`lastame\` varchar(50) NOT NULL COMMENT 'apellidos', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` bigint NULL, \`specialization_id\` bigint NULL, UNIQUE INDEX \`REL_e8ec91f39d1e6621794d0d3086\` (\`user_id\`), UNIQUE INDEX \`REL_59ea7d86ded25472cb3341b2f2\` (\`specialization_id\`), PRIMARY KEY (\`personal_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medrecords\` (\`record_id\` bigint NOT NULL AUTO_INCREMENT, \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`record_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medicines\` (\`medicine_id\` bigint NOT NULL AUTO_INCREMENT, \`commercial_name\` varchar(120) NOT NULL COMMENT 'dosis recetada', \`scientific_name\` varchar(120) NOT NULL COMMENT 'dosis recetada', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`medicine_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_details\` (\`detail_id\` bigint NOT NULL AUTO_INCREMENT, \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`medicine_id\` bigint NULL, PRIMARY KEY (\`detail_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medpresciptions\` (\`prescription_id\` bigint NOT NULL AUTO_INCREMENT, \`dose\` varchar(120) NOT NULL COMMENT 'dosis recetada', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`detail_id\` bigint NULL, UNIQUE INDEX \`REL_57007cba9f30892a161efe5948\` (\`detail_id\`), PRIMARY KEY (\`prescription_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_meddiagnostics\` (\`correlative_id\` bigint NOT NULL AUTO_INCREMENT, \`symptom_detail\` varchar(210) NOT NULL COMMENT 'detalle de símtomas', \`pre_existing\` varchar(210) NOT NULL COMMENT 'enfermedad preexistente', \`Detected_disease\` varchar(210) NOT NULL COMMENT 'enfermedad detectada', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`prescription_id\` bigint NULL, UNIQUE INDEX \`REL_3bd0ff612b310b5ce6797cd7e8\` (\`prescription_id\`), PRIMARY KEY (\`correlative_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medconsultations\` (\`consultation_id\` bigint NOT NULL AUTO_INCREMENT, \`correlative\` bigint NOT NULL COMMENT 'Correlativo de consultas', \`reason\` varchar(120) NOT NULL COMMENT 'razón o motivo de consulta', \`date_consultation\` timestamp(6) NOT NULL COMMENT 'fecha de consulta' DEFAULT CURRENT_TIMESTAMP(6), \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`personal_id\` bigint NULL, \`correlative_id\` bigint NULL, UNIQUE INDEX \`REL_2302c6084ede85b0e263ec6198\` (\`correlative_id\`), PRIMARY KEY (\`consultation_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hospital_medpatients\` (\`patient_id\` bigint NOT NULL AUTO_INCREMENT, \`identification\` bigint NOT NULL COMMENT 'CUI', \`first_name\` varchar(50) NOT NULL COMMENT 'primer nombre', \`second_name\` varchar(50) NOT NULL COMMENT 'segundo nombre', \`lastame\` varchar(50) NOT NULL COMMENT 'primer apellido', \`second_lastame\` varchar(50) NOT NULL COMMENT 'segundo apellido', \`dof\` timestamp(6) NOT NULL COMMENT 'Fecha de nacimiento' DEFAULT CURRENT_TIMESTAMP(6), \`address\` varchar(50) NOT NULL COMMENT 'dirección residencia', \`phone\` bigint NOT NULL COMMENT 'número de teléfono', \`email\` varchar(50) NOT NULL COMMENT 'dirección correo', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`record_id\` bigint NULL, \`consultation_id\` bigint NULL, UNIQUE INDEX \`REL_458441e5d659ef9105d65b8333\` (\`record_id\`), PRIMARY KEY (\`patient_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hospital_users\` ADD CONSTRAINT \`FK_d01be66ce0e68b56a6befccb218\` FOREIGN KEY (\`role_id\`) REFERENCES \`hospital_roles\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD CONSTRAINT \`FK_e8ec91f39d1e6621794d0d30864\` FOREIGN KEY (\`user_id\`) REFERENCES \`hospital_users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` ADD CONSTRAINT \`FK_59ea7d86ded25472cb3341b2f2e\` FOREIGN KEY (\`specialization_id\`) REFERENCES \`hospital_specializations\`(\`specialization_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_details\` ADD CONSTRAINT \`FK_2858282b879179bd25ef60b362b\` FOREIGN KEY (\`medicine_id\`) REFERENCES \`hospital_medicines\`(\`medicine_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_medpresciptions\` ADD CONSTRAINT \`FK_57007cba9f30892a161efe5948b\` FOREIGN KEY (\`detail_id\`) REFERENCES \`hospital_details\`(\`detail_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_meddiagnostics\` ADD CONSTRAINT \`FK_3bd0ff612b310b5ce6797cd7e8e\` FOREIGN KEY (\`prescription_id\`) REFERENCES \`hospital_medpresciptions\`(\`prescription_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_medconsultations\` ADD CONSTRAINT \`FK_b6250d683faa00111470f6a0a54\` FOREIGN KEY (\`personal_id\`) REFERENCES \`hospital_doctors\`(\`personal_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_medconsultations\` ADD CONSTRAINT \`FK_2302c6084ede85b0e263ec61985\` FOREIGN KEY (\`correlative_id\`) REFERENCES \`hospital_meddiagnostics\`(\`correlative_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_medpatients\` ADD CONSTRAINT \`FK_458441e5d659ef9105d65b8333e\` FOREIGN KEY (\`record_id\`) REFERENCES \`hospital_medrecords\`(\`record_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hospital_medpatients\` ADD CONSTRAINT \`FK_e5d5e05f3f6358fd43429e1d07a\` FOREIGN KEY (\`consultation_id\`) REFERENCES \`hospital_medconsultations\`(\`consultation_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hospital_medpatients\` DROP FOREIGN KEY \`FK_e5d5e05f3f6358fd43429e1d07a\``);
        await queryRunner.query(`ALTER TABLE \`hospital_medpatients\` DROP FOREIGN KEY \`FK_458441e5d659ef9105d65b8333e\``);
        await queryRunner.query(`ALTER TABLE \`hospital_medconsultations\` DROP FOREIGN KEY \`FK_2302c6084ede85b0e263ec61985\``);
        await queryRunner.query(`ALTER TABLE \`hospital_medconsultations\` DROP FOREIGN KEY \`FK_b6250d683faa00111470f6a0a54\``);
        await queryRunner.query(`ALTER TABLE \`hospital_meddiagnostics\` DROP FOREIGN KEY \`FK_3bd0ff612b310b5ce6797cd7e8e\``);
        await queryRunner.query(`ALTER TABLE \`hospital_medpresciptions\` DROP FOREIGN KEY \`FK_57007cba9f30892a161efe5948b\``);
        await queryRunner.query(`ALTER TABLE \`hospital_details\` DROP FOREIGN KEY \`FK_2858282b879179bd25ef60b362b\``);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP FOREIGN KEY \`FK_59ea7d86ded25472cb3341b2f2e\``);
        await queryRunner.query(`ALTER TABLE \`hospital_doctors\` DROP FOREIGN KEY \`FK_e8ec91f39d1e6621794d0d30864\``);
        await queryRunner.query(`ALTER TABLE \`hospital_users\` DROP FOREIGN KEY \`FK_d01be66ce0e68b56a6befccb218\``);
        await queryRunner.query(`DROP INDEX \`REL_458441e5d659ef9105d65b8333\` ON \`hospital_medpatients\``);
        await queryRunner.query(`DROP TABLE \`hospital_medpatients\``);
        await queryRunner.query(`DROP INDEX \`REL_2302c6084ede85b0e263ec6198\` ON \`hospital_medconsultations\``);
        await queryRunner.query(`DROP TABLE \`hospital_medconsultations\``);
        await queryRunner.query(`DROP INDEX \`REL_3bd0ff612b310b5ce6797cd7e8\` ON \`hospital_meddiagnostics\``);
        await queryRunner.query(`DROP TABLE \`hospital_meddiagnostics\``);
        await queryRunner.query(`DROP INDEX \`REL_57007cba9f30892a161efe5948\` ON \`hospital_medpresciptions\``);
        await queryRunner.query(`DROP TABLE \`hospital_medpresciptions\``);
        await queryRunner.query(`DROP TABLE \`hospital_details\``);
        await queryRunner.query(`DROP TABLE \`hospital_medicines\``);
        await queryRunner.query(`DROP TABLE \`hospital_medrecords\``);
        await queryRunner.query(`DROP INDEX \`REL_59ea7d86ded25472cb3341b2f2\` ON \`hospital_doctors\``);
        await queryRunner.query(`DROP INDEX \`REL_e8ec91f39d1e6621794d0d3086\` ON \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_doctors\``);
        await queryRunner.query(`DROP TABLE \`hospital_specializations\``);
        await queryRunner.query(`DROP TABLE \`hospital_users\``);
        await queryRunner.query(`DROP TABLE \`hospital_typologies\``);
        await queryRunner.query(`DROP TABLE \`hospital_roles\``);
    }

}
