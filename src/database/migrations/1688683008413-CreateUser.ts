import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1688683008413 implements MigrationInterface {
    name = 'CreateUser1688683008413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dump_users" ("user_id" BIGSERIAL NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(25) NOT NULL, "date_created" TIMESTAMP NOT NULL, "date_updated" TIMESTAMP, CONSTRAINT "PK_bdb401d2502aeca729aa5358e1f" PRIMARY KEY ("user_id")); COMMENT ON COLUMN "dump_users"."username" IS 'Username'; COMMENT ON COLUMN "dump_users"."password" IS 'User password'; COMMENT ON COLUMN "dump_users"."date_created" IS 'Date created'; COMMENT ON COLUMN "dump_users"."date_updated" IS 'Date updated'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dump_users"`);
    }

}
