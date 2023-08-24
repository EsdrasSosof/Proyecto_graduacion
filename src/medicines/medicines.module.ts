import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { MedicineRepository } from './repository/medicine.respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MedicinesController],
  providers: [MedicinesService, MedicineRepository]
})
export class MedicinesModule {}
