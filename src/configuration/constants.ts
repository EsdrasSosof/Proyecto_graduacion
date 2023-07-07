import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const constants = {
    secret: configService.get('JWT_SECRET'),
    expire: configService.get('JWT_EXPIRE'),
};
