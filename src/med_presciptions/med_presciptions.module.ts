import { Module } from '@nestjs/common';
import { MedPresciptionsService } from './med_presciptions.service';
import { MedPresciptionsController } from './med_presciptions.controller';
import { MedPresciptionRepository } from './repository/med_presciption.repository';
import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedPresciptionsController],
  providers: [MedPresciptionsService, MedPresciptionRepository]
})
export class MedPresciptionsModule {}
