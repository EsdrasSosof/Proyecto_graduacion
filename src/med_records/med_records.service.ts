import { Injectable } from '@nestjs/common';
import { CreateMedRecordDto } from './dto/create-med_record.dto';
import { UpdateMedRecordDto } from './dto/update-med_record.dto';
// import { MedRecordRepository } from './repository/med_record.repository';
import { MedRecordEntity } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { FechaRangeDto } from './dto/fecha-rangomed_record.dto';

@Injectable()
export class MedRecordsService {

  // constructor(private readonly medRecordRepository: MedRecordRepository) {}

  // async create(createMedRecordDto: CreateMedRecordDto) {
  //   return await this.medRecordRepository.create(createMedRecordDto);
  // }

  // async findAll() {
  //   return await this.medRecordRepository.findAll();
  // }

  // async findOne(id: number) {
  //   return await this.medRecordRepository.findOne(id);
  // }

  // async update(id: number, updateMedRecordDto: UpdateMedRecordDto) {
  //   return await this.medRecordRepository.update(id, updateMedRecordDto);
  // }

  // async remove(id: number) {
  //   return await this.medRecordRepository.remove(id);
  // }

  constructor(
    @InjectRepository(MedRecordEntity)
    private medRecordRepository: Repository<MedRecordEntity>,
  ) {}

    async create(record: Partial<MedRecordEntity>): Promise<CreateMedRecordDto> {
      const newRecord = this.medRecordRepository.create(record);
      const response = await this.medRecordRepository.save(newRecord);

      return plainToInstance(CreateMedRecordDto, response);
    }

    async findAll(): Promise<UpdateMedRecordDto[]> {
        const response = await this.medRecordRepository.find({ relations: ['patient_id']});

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async findOne(record_id: number): Promise<UpdateMedRecordDto | null> {
        const response = await this.medRecordRepository.findOneBy({ record_id });

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async update(record_id: number, record: Partial<MedRecordEntity>): Promise<UpdateMedRecordDto> {
        await this.medRecordRepository.update(record_id, record);

        const response = await this.medRecordRepository.findOneBy({ record_id });

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async remove(record_id: number): Promise<void> {
        await this.medRecordRepository.delete(record_id);
    }

    async searchByDateRange(fechaRangeDto: any): Promise<MedRecordEntity[]> {
        const { fechaInicial, fechaFinal } = fechaRangeDto;
        // console.log(fechaInicial, fechaFinal);
        // console.log(typeof fechaFinal);

        try {
        const records = await this.medRecordRepository.find({
          where: {
            date_created: Between(fechaInicial, fechaFinal),
          },
        });
          return records;
        }catch(err){
          console.log(err);
        }
    }

    //método para utilizar una sola relación
    // async findOneWithRelations(id: number): Promise<MedRecordEntity | null> {
    //   return this.medRecordRepository
    //     .createQueryBuilder('medRecord')
    //     .where('record_id= :id', { id })
    //     .leftJoinAndSelect('medRecord.patient_id', 'patient_id')
    //     .getOne();
    // }

    //método para utilizar varias relaciones
    async findOneWithRelations(id: number): Promise<MedRecordEntity | null> {
      return this.medRecordRepository
        .createQueryBuilder('medRecord')
        .where('medRecord.record_id = :id', { id })
        .leftJoinAndSelect('medRecord.patient_id', 'patient_id')
        .leftJoinAndSelect('medRecord.consultation_id', 'consultation_id')
        .leftJoinAndSelect('medRecord.correlative_id', 'correlative_id')
        .leftJoinAndSelect('medRecord.prescription_id', 'prescription_id')
        .getOne();
    }
    
}
