import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedRecordEntity } from '../entities';
import { CreateMedRecordDto } from '../dto/create-med_record.dto';
import { UpdateMedRecordDto } from '../dto/update-med_record.dto';


@Injectable()
export class MedRecordRepository {
    constructor(
        @InjectRepository(MedRecordEntity)
        private MedRecordRepository: Repository<MedRecordEntity>,
    ) { }

    async create(record: Partial<MedRecordEntity>): Promise<CreateMedRecordDto> {
        // Validate if personal exist
        // const exists = await this.MedRecordRepository.findOne({
        //     where: [
        //         { record_id: record.record_id },
        //     ],
        // });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`El historial ya esta registrado`, HttpStatus.CONFLICT);
        // }

        const newRecord = this.MedRecordRepository.create(record);
        const response = await this.MedRecordRepository.save(newRecord);

        return plainToInstance(CreateMedRecordDto, response);
    }

    async findAll(): Promise<UpdateMedRecordDto[]> {
        const response = await this.MedRecordRepository.find();

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async findOne(record_id: number): Promise<UpdateMedRecordDto | null> {
        const response = await this.MedRecordRepository.findOneBy({ record_id });

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async update(record_id: number, record: Partial<MedRecordEntity>): Promise<UpdateMedRecordDto> {
        await this.MedRecordRepository.update(record_id, record);

        const response = await this.MedRecordRepository.findOneBy({ record_id });

        return plainToInstance(UpdateMedRecordDto, response);
    }

    async remove(record_id: number): Promise<void> {
        await this.MedRecordRepository.delete(record_id);
    }

}