import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { TypologyEntity } from '../entities';
import { CreateTypologyDto } from '../dto/create-typology.dto';
import { UpdateTypologyDto } from '../dto/update-typology.dto';




@Injectable()
export class TypologyRepository {
    constructor(
        @InjectRepository(TypologyEntity)
        private TypologyRepository: Repository<TypologyEntity>,
    ) { }

    async create(typology: Partial<TypologyEntity>): Promise<CreateTypologyDto> {
        // Validate if personal exist
        // const exists = await this.TypologyRepository.findOne({
        //     where: [
        //         { typology_id: typology.typology_id },
        //     ],
        // });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`La tipología ya esta registrado`, HttpStatus.CONFLICT);
        // }

        const newTypology = this.TypologyRepository.create(typology);
        const response = await this.TypologyRepository.save(newTypology);

        //podría crearse otro Dto como en usuario
        return plainToInstance(CreateTypologyDto, response);
    }

    async findAll(): Promise<UpdateTypologyDto[]> {
        const response = await this.TypologyRepository.find();

        return plainToInstance(UpdateTypologyDto, response);
    }

    async findOne(typology_id: number): Promise<UpdateTypologyDto | null> {
        const response = await this.TypologyRepository.findOneBy({ typology_id });

        return plainToInstance(UpdateTypologyDto, response);
    }

    async update(typology_id: number, typology: Partial<TypologyEntity>): Promise<UpdateTypologyDto> {
        await this.TypologyRepository.update(typology_id, typology);

        const response = await this.TypologyRepository.findOneBy({ typology_id });

        return plainToInstance(UpdateTypologyDto, response);
    }

    async remove(typology_id: number): Promise<void> {
        await this.TypologyRepository.delete(typology_id);
    }

}