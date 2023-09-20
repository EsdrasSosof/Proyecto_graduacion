import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { RoleEntity } from '../entities';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';



@Injectable()
export class RoleRepository {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>,
    ) { }

    async create(role: Partial<RoleEntity>): Promise<CreateRoleDto> {
        // Validate if personal exist
        // const exists = await this.RoleRepository.findOne({
        //     where: [
        //         { role_id: role.role_id },
        //     ],
        // });
        const exists = await this.roleRepository.findOneBy({ role_id: role.role_id });

        if (exists !== null) { // Exists
            throw new HttpException(`El correlativo de consulta ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newRole = this.roleRepository.create(role);
        const response = await this.roleRepository.save(newRole);

        //podría crearse otro Dto como en usuario
        return plainToInstance(CreateRoleDto, response);
    }

    async findAll(): Promise<UpdateRoleDto[]> {
        const response = await this.roleRepository.find();

        return plainToInstance(UpdateRoleDto, response);
    }

    async findOne(role_id: number): Promise<UpdateRoleDto | null> {
        const response = await this.roleRepository.findOneBy({ role_id });

        return plainToInstance(UpdateRoleDto, response);
    }

    async update(role_id: number, role: Partial<RoleEntity>): Promise<UpdateRoleDto> {
        await this.roleRepository.update(role_id, role);

        const response = await this.roleRepository.findOneBy({ role_id });

        return plainToInstance(UpdateRoleDto, response);
    }

    async remove(role_id: number): Promise<void> {
        await this.roleRepository.delete(role_id);
    }

}