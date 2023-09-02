import { Module } from '@nestjs/common';
import { TypologiesService } from './typologies.service';
import { TypologiesController } from './typologies.controller';
import { TypologyRepository } from './repository/typology.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [TypologiesController],
  providers: [TypologiesService, TypologyRepository]
})
export class TypologiesModule {}
