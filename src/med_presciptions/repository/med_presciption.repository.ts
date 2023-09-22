import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedPresciptionEntity } from '../entities';
import { CreateMedPresciptionDto } from '../dto/create-med_presciption.dto';
import { UpdateMedPresciptionDto } from '../dto/update-med_presciption.dto';


@Injectable()
export class MedPresciptionRepository {
    constructor(
        @InjectRepository(MedPresciptionEntity)
        private MedPresciptionRepository: Repository<MedPresciptionEntity>,
    ) { }

    async create(prescription: Partial<MedPresciptionEntity>): Promise<CreateMedPresciptionDto> {
        // Validate if personal exist
        // const exists = await this.MedPresciptionRepository.findOne({
        //     where: [
        //         { prescription_id: prescription.prescription_id },
        //     ],
        // });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`La prescipción ya esta registrada`, HttpStatus.CONFLICT);
        // }

        const newPresciption = this.MedPresciptionRepository.create(prescription);
        const response = await this.MedPresciptionRepository.save(newPresciption);

        return plainToInstance(CreateMedPresciptionDto, response);
    }

    async findAll(): Promise<UpdateMedPresciptionDto[]> {
        const response = await this.MedPresciptionRepository.find();

        return plainToInstance(UpdateMedPresciptionDto, response);
    }

    async findOne(prescription_id: number): Promise<UpdateMedPresciptionDto | null> {
        const response = await this.MedPresciptionRepository.findOneBy({ prescription_id });

        return plainToInstance(UpdateMedPresciptionDto, response);
    }

    async update(prescription_id: number, diagnostic: Partial<MedPresciptionEntity>): Promise<UpdateMedPresciptionDto> {
        await this.MedPresciptionRepository.update(prescription_id, diagnostic);

        const response = await this.MedPresciptionRepository.findOneBy({ prescription_id });

        return plainToInstance(UpdateMedPresciptionDto, response);
    }

    async remove(prescription_id: number): Promise<void> {
        await this.MedPresciptionRepository.delete(prescription_id);
    }

}