//import { MigrationInterface, QueryRunner } from "typeorm";

//export class CreateUser1691376884446 implements MigrationInterface {
//    name = 'CreateUser1691376884446'

//    public async up(queryRunner: QueryRunner): Promise<void> {
//        await queryRunner.query(`CREATE TABLE \`hospital_users\` (\`user_id\` bigint NOT NULL AUTO_INCREMENT, \`username\` varchar(50) NOT NULL COMMENT 'Username', \`password\` varchar(25) NOT NULL COMMENT 'User password', \`date_created\` timestamp(6) NOT NULL COMMENT 'Date created' DEFAULT CURRENT_TIMESTAMP(6), \`date_updated\` timestamp(6) NOT NULL COMMENT 'Date updated' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
//    }

//    public async down(queryRunner: QueryRunner): Promise<void> {
//        await queryRunner.query(`DROP TABLE \`hospital_users\``);
//    }

//}
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1691376884446 implements MigrationInterface {
    name = 'CreateUser1691376884446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hospital_users" ("user_id" BIGSERIAL NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(25) NOT NULL, "date_created" TIMESTAMP NOT NULL DEFAULT now(), "date_updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bdb401d2502aeca729aa5358e1f" PRIMARY KEY ("user_id")); COMMENT ON COLUMN "dump_users"."username" IS 'Username'; COMMENT ON COLUMN "dump_users"."password" IS 'User password'; COMMENT ON COLUMN "dump_users"."date_created" IS 'Date created'; COMMENT ON COLUMN "dump_users"."date_updated" IS 'Date updated'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hospital_users"`);
    }

}