import { Module } from '@nestjs/common';
import { MedRecordsService } from './med_records.service';
import { MedRecordsController } from './med_records.controller';
import { MedRecordRepository } from './repository/med_record.repository';
import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedRecordsController],
  providers: [MedRecordsService, MedRecordRepository]
})
export class MedRecordsModule {}
