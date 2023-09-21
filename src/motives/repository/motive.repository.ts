import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MotiveEntity } from '../entities';
import { CreateMotiveDto } from '../dto/create-motive.dto';
import { UpdateMotiveDto } from '../dto/update-motive.dto';




@Injectable()
export class MotiveRepository {
    constructor(
        @InjectRepository(MotiveEntity)
        private motiveRepository: Repository<MotiveEntity>,
    ) { }

    async create(motive: Partial<MotiveEntity>): Promise<CreateMotiveDto> {
        // Validate if personal exist
        // const exists = await this.RoleRepository.findOne({
        //     where: [
        //         { role_id: role.role_id },
        //     ],
        // });
        const exists = await this.motiveRepository.findOneBy({ motive_id: motive.motive_id });

        if (exists !== null) { // Exists
            throw new HttpException(`El correlativo de consulta ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newMotive = this.motiveRepository.create(motive);
        const response = await this.motiveRepository.save(newMotive);

        //podría crearse otro Dto como en usuario
        return plainToInstance(CreateMotiveDto, response);
    }

    async findAll(): Promise<UpdateMotiveDto[]> {
        const response = await this.motiveRepository.find();

        return plainToInstance(UpdateMotiveDto, response);
    }

    async findOne(motive_id: number): Promise<UpdateMotiveDto | null> {
        const response = await this.motiveRepository.findOneBy({ motive_id });

        return plainToInstance(UpdateMotiveDto, response);
    }

    async update(motive_id: number, name: Partial<MotiveEntity>): Promise<UpdateMotiveDto> {
        await this.motiveRepository.update(motive_id, name);

        const response = await this.motiveRepository.findOneBy({ motive_id });

        return plainToInstance(UpdateMotiveDto, response);
    }

    async remove(motive_id: number): Promise<void> {
        await this.motiveRepository.delete(motive_id);
    }

}