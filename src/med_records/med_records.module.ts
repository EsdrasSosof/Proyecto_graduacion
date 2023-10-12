import { Module } from '@nestjs/common';
import { MedRecordsService } from './med_records.service';
import { MedRecordsController } from './med_records.controller';
// import { MedRecordRepository } from './repository/med_record.repository';
// import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedRecordEntity } from './entities';

@Module({
  // imports: [TypeOrmModule.forFeature(entities)],
  // imports: [TypeOrmModule.forFeature([MedRecordEntity, MedRecordRepository])],
  imports: [TypeOrmModule.forFeature([MedRecordEntity])],
  controllers: [MedRecordsController],
  // providers: [MedRecordsService, MedRecordRepository]
  providers: [MedRecordsService]
})
export class MedRecordsModule {}
