import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { SpecializationEntity } from '../entities';
import { CreateSpecializationDto } from '../dto/create-specialization.dto';
import { UpdateSpecializationDto } from '../dto/update-specialization.dto';


@Injectable()
export class SpecializationRepository {
    constructor(
        @InjectRepository(SpecializationEntity)
        private specializationRepository: Repository<SpecializationEntity>,
    ) { }

    async create(specialization: Partial<SpecializationEntity>): Promise<CreateSpecializationDto> {
        // Validate if personal exist
        // const exists = await this.SpecializationRepository.findOne({
        //     where: [
        //         { specialization_id: specialization.specialization_id },
        //     ],
        // });
        // const exists = await this.specializationRepository.findOneBy({ specialization_id: specialization.specialization_id });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`El personal ya esta registrado`, HttpStatus.CONFLICT);
        // }

        const newSpeciality = this.specializationRepository.create(specialization);
        const response = await this.specializationRepository.save(newSpeciality);

        return plainToInstance(CreateSpecializationDto, response);
    }

    async findAll(): Promise<UpdateSpecializationDto[]> {
        const response = await this.specializationRepository.find();

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async findOne(specialization_id: number): Promise<UpdateSpecializationDto | null> {
        const response = await this.specializationRepository.findOneBy({ specialization_id });

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async update(specialization_id: number, specialization: Partial<SpecializationEntity>): Promise<UpdateSpecializationDto> {
        await this.specializationRepository.update(specialization_id, specialization);

        const response = await this.specializationRepository.findOneBy({ specialization_id });

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async remove(specialization_id: number): Promise<void> {
        await this.specializationRepository.delete(specialization_id);
    }

}