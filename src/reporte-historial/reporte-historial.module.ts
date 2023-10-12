import { Module } from '@nestjs/common';
import { ReporteHistorialService } from './reporte-historial.service';
import { ReporteHistorialController } from './reporte-historial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedRecordEntity } from '../med_records/entities';
// import { MedRecordRepository } from '../med_records/repository/med_record.repository';
import { MedRecordsModule } from '../med_records/med_records.module';
import { MedRecordsService } from '../med_records/med_records.service';
// import entities from './entities';


@Module({
  // imports: [TypeOrmModule.forFeature(entities)],
  // imports: [TypeOrmModule.forFeature([MedRecordEntity, MedRecordRepository, MedRecordsModule])],
  imports: [TypeOrmModule.forFeature([MedRecordEntity, MedRecordsModule])],
  controllers: [ReporteHistorialController],
  providers: [ReporteHistorialService, MedRecordsService]
})
export class ReporteHistorialModule {}
