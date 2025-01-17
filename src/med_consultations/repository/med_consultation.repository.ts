import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedConsultationEntity } from '../entities';
import { CreateMedConsultationDto } from '../dto/create-med_consultation.dto';
import { UpdateMedConsultationDto } from '../dto/update-med_consultation.dto';


@Injectable()
export class MedConsultationRepository {
    constructor(
        @InjectRepository(MedConsultationEntity)
        private medConsultationRepository: Repository<MedConsultationEntity>,
    ) { }

    async create(consultation: Partial<MedConsultationEntity>): Promise<CreateMedConsultationDto> {
        // // Validate if personal exist
        // const exists = await this.MedConsultationRepository.findOne({
        //     where: [
        //         { consultation_id: consultation.consultation_id },
        //     ],
        // });
        // const exists = await this.medConsultationRepository.findOneBy({ consultation_id: consultation.consultation_id });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`El correlativo de consulta ya esta registrado`, HttpStatus.CONFLICT);
        // }

        const newConsultation = this.medConsultationRepository.create(consultation);
        const response = await this.medConsultationRepository.save(newConsultation);

        //podría crearse otro Dto como en usuario
        return plainToInstance(CreateMedConsultationDto, response);
    }

    async findAll(): Promise<UpdateMedConsultationDto[]> {
        const response = await this.medConsultationRepository.find();

        return plainToInstance(UpdateMedConsultationDto, response);
    }

    async findOne(consultation_id: number): Promise<UpdateMedConsultationDto | null> {
        const response = await this.medConsultationRepository.findOneBy({ consultation_id });

        return plainToInstance(UpdateMedConsultationDto, response);
    }

    async update(consultation_id: number, consultation: Partial<MedConsultationEntity>): Promise<UpdateMedConsultationDto> {
        await this.medConsultationRepository.update(consultation_id, consultation);

        const response = await this.medConsultationRepository.findOneBy({ consultation_id });

        return plainToInstance(UpdateMedConsultationDto, response);
    }

    async remove(consultation_id: number): Promise<void> {
        await this.medConsultationRepository.delete(consultation_id);
    }

}