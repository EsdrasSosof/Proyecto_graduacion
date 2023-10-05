import { Module } from '@nestjs/common';
import { GraphConsultationService } from './graph-consultation.service';
import { GraphConsultationController } from './graph-consultation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphConsultationRepository } from './repository/graph-consultation.repository';
import { MedConsultationEntity } from '../med_consultations/entities';
import { MedConsultationRepository } from '../med_consultations/repository/med_consultation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedConsultationEntity,MedConsultationRepository])],
  controllers: [GraphConsultationController],
  providers: [GraphConsultationService, GraphConsultationRepository]
})
export class GraphConsultationModule {}
