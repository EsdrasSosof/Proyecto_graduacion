import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserSeed } from '../factories/user.seed';

export class SeedUser1688684470144 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        for await (const user of UserSeed) {
            const query = `
            INSERT INTO dump_users (username, password, date_created)
            values ('${user.username}', '${user.password}', '${user.date_created}')`;
            await queryRunner.query(query);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
