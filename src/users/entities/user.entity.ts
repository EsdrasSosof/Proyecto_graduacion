import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

@Entity({ name: `${configService.get('DB_PREFIX')}_users` })
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    user_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'Username',
    })
    username: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'User password',
    })
    password: string;

    @Column({
        nullable: false,
        type: 'timestamp',
        comment: 'Date created',
    })
    date_created: Date;

    @Column({
        nullable: true,
        type: 'timestamp',
        default: null,
        comment: 'Date updated',
    })
    date_updated: Date;
}
