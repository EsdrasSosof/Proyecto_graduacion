import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedPatientEntity } from '../entities';
import { CreateMedPatientDto } from '../dto/create-med_patient.dto';
import { UpdateMedPatientDto } from '../dto/update-med_patient.dto';

@Injectable()
export class MedPatientRepository {
    constructor(
        @InjectRepository(MedPatientEntity)
        private MedPatientRepository: Repository<MedPatientEntity>,
    ) { }

    async create(patient: Partial<MedPatientEntity>): Promise<CreateMedPatientDto> {
        // Validate if personal exist
        const exists = await this.MedPatientRepository.findOne({
            where: [
                { identification: patient.identification },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El personal ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newUser = this.MedPatientRepository.create(patient);
        const response = await this.MedPatientRepository.save(newUser);

        return plainToInstance(CreateMedPatientDto, response);
    }

    async findAll(): Promise<UpdateMedPatientDto[]> {
        const response = await this.MedPatientRepository.find();

        return plainToInstance(UpdateMedPatientDto, response);
    }

    async findOne(patient_id: number): Promise<UpdateMedPatientDto | null> {
        const response = await this.MedPatientRepository.findOneBy({ patient_id });

        return plainToInstance(UpdateMedPatientDto, response);
    }

    async update(patient_id: number, patient: Partial<MedPatientEntity>): Promise<UpdateMedPatientDto> {
        await this.MedPatientRepository.update(patient_id, patient);

        const response = await this.MedPatientRepository.findOneBy({ patient_id });

        return plainToInstance(UpdateMedPatientDto, response);
    }

    async remove(patient_id: number): Promise<void> {
        await this.MedPatientRepository.delete(patient_id);
    }

}
