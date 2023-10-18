import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

config();

const configService = new ConfigService();

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRoot({
            //type: 'postgres',
            type: 'mysql',
            host: process.env.DB_HOST || configService.get('DB_HOST'),
            // host: configService.get('DB_HOST'),
            // port: process.env.DB_PORT || configService.get('DB_PORT'),
            port: parseInt(process.env.DB_PORT || configService.get('DB_PORT')),
            // port: configService.get('DB_PORT'),
            username: process.env.DB_USERNAME || configService.get('DB_USERNAME'),
            // username: configService.get('DB_USERNAME'),
            password: process.env.DB_PASSWORD || configService.get('DB_PASSWORD'),
            // password: configService.get('DB_PASSWORD'),
            database: process.env.DB_NAME || configService.get('DB_NAME'),
            // database: configService.get('DB_NAME'),
            entities: [],
            autoLoadEntities: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule {}
