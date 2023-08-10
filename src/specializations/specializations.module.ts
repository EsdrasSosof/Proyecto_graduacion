import { Module } from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { SpecializationsController } from './specializations.controller';
import { SpecializationRepository } from './repository/specialization.repository';
import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [SpecializationsController],
  providers: [SpecializationsService,SpecializationRepository]
})
export class SpecializationsModule {}
