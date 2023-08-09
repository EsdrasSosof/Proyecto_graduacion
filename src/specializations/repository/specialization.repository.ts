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
        private SpecializationRepository: Repository<SpecializationEntity>,
    ) { }

    async create(specialization: Partial<SpecializationEntity>): Promise<CreateSpecializationDto> {
        // Validate if personal exist
        const exists = await this.SpecializationRepository.findOne({
            where: [
                { specialization_id: specialization.specialization_id },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El personal ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newUser = this.SpecializationRepository.create(specialization);
        const response = await this.SpecializationRepository.save(newUser);

        return plainToInstance(CreateSpecializationDto, response);
    }

    async findAll(): Promise<UpdateSpecializationDto[]> {
        const response = await this.SpecializationRepository.find();

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async findOne(specialization_id: number): Promise<UpdateSpecializationDto | null> {
        const response = await this.SpecializationRepository.findOneBy({ specialization_id });

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async update(specialization_id: number, specialization: Partial<SpecializationEntity>): Promise<UpdateSpecializationDto> {
        await this.SpecializationRepository.update(specialization_id, specialization);

        const response = await this.SpecializationRepository.findOneBy({ specialization_id });

        return plainToInstance(UpdateSpecializationDto, response);
    }

    async remove(specialization_id: number): Promise<void> {
        await this.SpecializationRepository.delete(specialization_id);
    }

}