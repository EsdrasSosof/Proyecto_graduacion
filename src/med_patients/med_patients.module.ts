import { Module } from '@nestjs/common';
import { MedPatientsService } from './med_patients.service';
import { MedPatientsController } from './med_patients.controller';
import { MedPatientRepository } from './repository/med_patient.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedPatientsController],
  providers: [MedPatientsService, MedPatientRepository]
})
export class MedPatientsModule {}
