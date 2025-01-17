import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from '../users/entities/user.entity';
import { DoctorEntity } from '../doctors/entities';
import { SpecializationEntity } from '../specializations/entities';
import { MedPatientEntity } from '../med_patients/entities';
import { MedConsultationEntity } from '../med_consultations/entities';
import { MedDiagnostictEntity } from '../med_diagnostics/entities';
import { MedRecordEntity } from '../med_records/entities';
import { MedPresciptionEntity } from '../med_presciptions/entities';
import { DetailEntity } from '../details/entities';
import { MedicineEntity } from '../medicines/entities';
import { RoleEntity } from '../roles/entities';
import { TypologyEntity } from '../typologies/entities';
import { MotiveEntity } from '../motives/entities';

import { CreateFactory1691464596829 } from '../database/migrations/1691464596829-CreateFactory';
import { SeedUser1691464975987 } from '../database/seeders/1691464975987-SeedUser';





config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [
        UserEntity,DoctorEntity,SpecializationEntity,MedPatientEntity,MedConsultationEntity,MedDiagnostictEntity,MedRecordEntity,
        MedPresciptionEntity,DetailEntity,MedicineEntity,RoleEntity,TypologyEntity,MotiveEntity
    ],
    migrations: [
        CreateFactory1691464596829,
        SeedUser1691464975987
    ],
});