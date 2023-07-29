import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from '../users/entities/user.entity';
import { CreateUser1688683008413 } from '../database/migrations/1688683008413-CreateUser';
import { SeedUser1688684470144 } from '../database/seeders/1688684470144-SeedUser';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [
        UserEntity,
    ],
    migrations: [
        CreateUser1688683008413,
        SeedUser1688684470144
    ],
});

