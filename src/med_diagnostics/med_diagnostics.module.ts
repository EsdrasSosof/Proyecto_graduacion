import { Module } from '@nestjs/common';
import { MedDiagnosticsService } from './med_diagnostics.service';
import { MedDiagnosticsController } from './med_diagnostics.controller';
import { MedDiagnosticRepository } from './repository/med_diagnostic.repository';
import entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedDiagnosticsController],
  providers: [MedDiagnosticsService, MedDiagnosticRepository]
})
export class MedDiagnosticsModule {}
