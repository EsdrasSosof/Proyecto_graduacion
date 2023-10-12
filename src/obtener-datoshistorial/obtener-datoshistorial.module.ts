import { Module } from '@nestjs/common';
import { ObtenerDatoshistorialService } from './obtener-datoshistorial.service';
import { ObtenerDatoshistorialController } from './obtener-datoshistorial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedRecordEntity } from '../med_records/entities';
import { MedRecordsModule } from '../med_records/med_records.module';
import { ObtenerDatosHistorialRepository } from './repository/obtener-datoshistorial.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedRecordEntity, MedRecordsModule])],
  controllers: [ObtenerDatoshistorialController],
  providers: [ObtenerDatoshistorialService, ObtenerDatosHistorialRepository]
})
export class ObtenerDatoshistorialModule {}
