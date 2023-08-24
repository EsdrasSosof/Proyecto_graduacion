import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { DetailRepository } from './repository/detail.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [DetailsController],
  providers: [DetailsService, DetailRepository]
})
export class DetailsModule {}
