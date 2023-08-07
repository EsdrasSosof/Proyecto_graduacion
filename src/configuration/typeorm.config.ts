import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from '../users/entities/user.entity';
import { DoctorEntity } from '../doctors/entities';
import { CreateUser1691376884446 } from '../database/migrations/1691376884446-CreateUser';
import { CreateDoctors1691383289619 } from '../database/migrations/1691383289619-CreateDoctors';
import { SeedUser1688684470144 } from '../database/seeders/1688684470144-SeedUser';




config();

const configService = new ConfigService();

export default new DataSource({
    //type: 'postgres',
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [
        UserEntity,DoctorEntity, 
    ],
    migrations: [
        CreateUser1691376884446,
        SeedUser1688684470144,
        CreateDoctors1691383289619
    ],
});