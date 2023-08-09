import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();
const PREFIX = configService.get('DB_PREFIX');

export const CONSTANTS = {
    SECRET: configService.get('JWT_SECRET'),
    EXPIRE: configService.get('JWT_EXPIRE'),
};

export const TABLE_NAME = {
    USER: `${PREFIX}_users`,
    DOCTORS: `${PREFIX}_doctors`,
    SPECIALIZATION: `${PREFIX}_specializations`
}
