import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}

    async create(user: Partial<UserEntity>): Promise<UserEntity> {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.usersRepository.find();
    }

    findOne(user_id: number): Promise<UserEntity | null> {
        return this.usersRepository.findOneBy({ user_id });
    }

    findByUserNamePassword(username: string, password: string): Promise<UserEntity | undefined> {
        return this.usersRepository.findOne({
            where: [
                { username, password },
            ],
        });
    }

    async update(user_id: number, user: Partial<UserEntity>): Promise<UserEntity> {
        await this.usersRepository.update(user_id, user);

        return this.usersRepository.findOneBy({ user_id });
    }

    async remove(user_id: number): Promise<void> {
        await this.usersRepository.delete(user_id);
    }

}
