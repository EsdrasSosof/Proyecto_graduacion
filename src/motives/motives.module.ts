import { Module } from '@nestjs/common';
import { MotivesService } from './motives.service';
import { MotivesController } from './motives.controller';
import { MotiveRepository } from './repository/motive.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MotivesController],
  providers: [MotivesService, MotiveRepository]
})
export class MotivesModule {}
