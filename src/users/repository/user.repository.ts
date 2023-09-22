import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { ReadUserDto, AuthUserDto } from '../dto/';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    async create(user: Partial<UserEntity>): Promise<ReadUserDto> {
        // Validate if user exist
        // const exists = await this.usersRepository.findOne({
        //     where: [
        //         { username: user.username },
        //     ],
        // });

        // if (exists !== null) { // Exists
        //     throw new HttpException(`El usuario ya esta registrado`, HttpStatus.CONFLICT);
        // }

        const newUser = this.usersRepository.create(user);
        const response = await this.usersRepository.save(newUser);

        return plainToInstance(ReadUserDto, response);
    }

    async findAll(): Promise<ReadUserDto[]> {
        const response = await this.usersRepository.find();

        return plainToInstance(ReadUserDto, response);
    }

    async findOne(user_id: number): Promise<ReadUserDto | null> {
        const response = await this.usersRepository.findOneBy({ user_id });

        return plainToInstance(ReadUserDto, response);
    }

    async findByUserNamePassword(username: string, password: string): Promise<AuthUserDto | undefined> {
        const response = await this.usersRepository.findOne({
            where: [
                { username, password },
            ],
        });

        return plainToInstance(AuthUserDto, response);
    }

    async update(user_id: number, user: Partial<UserEntity>): Promise<ReadUserDto> {
        await this.usersRepository.update(user_id, user);

        const response = await this.usersRepository.findOneBy({ user_id });

        return plainToInstance(ReadUserDto, response);
    }

    async remove(user_id: number): Promise<void> {
        await this.usersRepository.delete(user_id);
    }

}
