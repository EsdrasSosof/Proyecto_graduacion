import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedicineEntity } from '../entities';
import { CreateMedicineDto } from '../dto/create-medicine.dto';
import { UpdateMedicineDto } from '../dto/update-medicine.dto';



@Injectable()
export class MedicineRepository {
    constructor(
        @InjectRepository(MedicineEntity)
        private MedicineRepository: Repository<MedicineEntity>,
    ) { }

    async create(medicine: Partial<MedicineEntity>): Promise<CreateMedicineDto> {
        // Validate if medicine exist
        const exists = await this.MedicineRepository.findOne({
            where: [
                { medicine_id: medicine.medicine_id },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El medicamento ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newMedicine = this.MedicineRepository.create(medicine);
        const response = await this.MedicineRepository.save(newMedicine);

        return plainToInstance(CreateMedicineDto, response);
    }

    async findAll(): Promise<UpdateMedicineDto[]> {
        const response = await this.MedicineRepository.find();

        return plainToInstance(UpdateMedicineDto, response);
    }

    async findOne(medicine_id: number): Promise<UpdateMedicineDto | null> {
        const response = await this.MedicineRepository.findOneBy({ medicine_id });

        return plainToInstance(UpdateMedicineDto, response);
    }

    async update(medicine_id: number, medicine: Partial<MedicineEntity>): Promise<UpdateMedicineDto> {
        await this.MedicineRepository.update(medicine_id, medicine);

        const response = await this.MedicineRepository.findOneBy({ medicine_id });

        return plainToInstance(UpdateMedicineDto, response);
    }

    async remove(medicine_id: number): Promise<void> {
        await this.MedicineRepository.delete(medicine_id);
    }

}