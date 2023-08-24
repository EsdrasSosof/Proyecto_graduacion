import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CONSTANTS } from './configuration/constants';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { MedPatientsModule } from './med_patients/med_patients.module';
import { MedConsultationsModule } from './med_consultations/med_consultations.module';
import { MedDiagnosticsModule } from './med_diagnostics/med_diagnostics.module';
import { MedRecordsModule } from './med_records/med_records.module';
import { MedPresciptionsModule } from './med_presciptions/med_presciptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: CONSTANTS.SECRET,
      signOptions: { expiresIn: CONSTANTS.EXPIRE },
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    DoctorsModule,
    SpecializationsModule,
    MedPatientsModule,
    MedConsultationsModule,
    MedDiagnosticsModule,
    MedRecordsModule,
    MedPresciptionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
