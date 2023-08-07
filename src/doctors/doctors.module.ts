import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DoctorRepository } from './repository/doctor.repository';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorRepository]
})
export class DoctorsModule {}
