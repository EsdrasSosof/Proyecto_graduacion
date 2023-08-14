import { Module } from '@nestjs/common';
import { MedConsultationsService } from './med_consultations.service';
import { MedConsultationsController } from './med_consultations.controller';
import { MedConsultationRepository } from './repository/med_consultation.repository';
import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedConsultationsController],
  providers: [MedConsultationsService, MedConsultationRepository]
})
export class MedConsultationsModule {}
