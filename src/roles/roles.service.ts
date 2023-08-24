import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './repository/role.repository';

@Injectable()
export class RolesService {

  constructor(private readonly roleRepository: RoleRepository) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.create(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.findAll();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.roleRepository.remove(id);
  }
}
