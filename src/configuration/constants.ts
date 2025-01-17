import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();
const PREFIX = process.env.DB_PREFIX || configService.get('DB_PREFIX');

export const CONSTANTS = {
    SECRET: process.env.JWT_SECRET || configService.get('JWT_SECRET'),
    EXPIRE: process.env.JWT_EXPIRE || configService.get('JWT_EXPIRE'),
};

export const TABLE_NAME = {
    USER: `${PREFIX}_users`,
    DOCTORS: `${PREFIX}_doctors`,
    SPECIALIZATION: `${PREFIX}_specializations`,
    MEDPATIENT: `${PREFIX}_medpatients`,
    MEDCONSULTATION: `${PREFIX}_medconsultations`,
    MEDDIAGNOSTIC: `${PREFIX}_meddiagnostics`,
    MEDRECORD: `${PREFIX}_medrecords`,
    MEDPRESCRIPTION: `${PREFIX}_medpresciptions`,
    MEDDETAIL: `${PREFIX}_details`,
    MEDMEDICINE: `${PREFIX}_medicines`,
    MEDROL: `${PREFIX}_roles`,
    TYPOLOGIES: `${PREFIX}_typologies`,
    MOTIVES: `${PREFIX}_motives`
}
