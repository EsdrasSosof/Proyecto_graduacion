import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedDiagnostictEntity } from '../entities';
import { CreateMedDiagnosticDto } from '../dto/create-med_diagnostic.dto';
import { UpdateMedDiagnosticDto } from '../dto/update-med_diagnostic.dto';


@Injectable()
export class MedDiagnosticRepository {
    constructor(
        @InjectRepository(MedDiagnostictEntity)
        private MedDiagnosticRepository: Repository<MedDiagnostictEntity>,
    ) { }

    async create(diagnostic: Partial<MedDiagnostictEntity>): Promise<CreateMedDiagnosticDto> {
        // Validate if personal exist
        const exists = await this.MedDiagnosticRepository.findOne({
            where: [
                { correlative_id: diagnostic.correlative_id },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El correlativo ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newDiagnostic = this.MedDiagnosticRepository.create(diagnostic);
        const response = await this.MedDiagnosticRepository.save(newDiagnostic);

        return plainToInstance(CreateMedDiagnosticDto, response);
    }

    async findAll(): Promise<UpdateMedDiagnosticDto[]> {
        const response = await this.MedDiagnosticRepository.find();

        return plainToInstance(UpdateMedDiagnosticDto, response);
    }

    async findOne(correlative_id: number): Promise<UpdateMedDiagnosticDto | null> {
        const response = await this.MedDiagnosticRepository.findOneBy({ correlative_id });

        return plainToInstance(UpdateMedDiagnosticDto, response);
    }

    async update(correlative_id: number, diagnostic: Partial<MedDiagnostictEntity>): Promise<UpdateMedDiagnosticDto> {
        await this.MedDiagnosticRepository.update(correlative_id, diagnostic);

        const response = await this.MedDiagnosticRepository.findOneBy({ correlative_id });

        return plainToInstance(UpdateMedDiagnosticDto, response);
    }

    async remove(correlative_id: number): Promise<void> {
        await this.MedDiagnosticRepository.delete(correlative_id);
    }

}