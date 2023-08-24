import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { DetailEntity } from '../entities';
import { CreateDetailDto } from '../dto/create-detail.dto';
import { UpdateDetailDto } from '../dto/update-detail.dto';



@Injectable()
export class DetailRepository {
    constructor(
        @InjectRepository(DetailEntity)
        private DetailRepository: Repository<DetailEntity>,
    ) { }

    async create(detail: Partial<DetailEntity>): Promise<CreateDetailDto> {
        // Validate if personal exist
        const exists = await this.DetailRepository.findOne({
            where: [
                { detail_id: detail.detail_id },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El detalle ya esta registrada`, HttpStatus.CONFLICT);
        }

        const newDetail = this.DetailRepository.create(detail);
        const response = await this.DetailRepository.save(newDetail);

        return plainToInstance(CreateDetailDto, response);
    }

    async findAll(): Promise<UpdateDetailDto[]> {
        const response = await this.DetailRepository.find();

        return plainToInstance(UpdateDetailDto, response);
    }

    async findOne(detail_id: number): Promise<UpdateDetailDto | null> {
        const response = await this.DetailRepository.findOneBy({ detail_id });

        return plainToInstance(UpdateDetailDto, response);
    }

    async update(detail_id: number, diagnostic: Partial<DetailEntity>): Promise<UpdateDetailDto> {
        await this.DetailRepository.update(detail_id, diagnostic);

        const response = await this.DetailRepository.findOneBy({ detail_id });

        return plainToInstance(UpdateDetailDto, response);
    }

    async remove(detail_id: number): Promise<void> {
        await this.DetailRepository.delete(detail_id);
    }

}