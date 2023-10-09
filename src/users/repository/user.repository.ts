import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { ReadUserDto, AuthUserDto } from '../dto/';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    //función sin encriptar
    // async create(user: Partial<UserEntity>): Promise<ReadUserDto> {
    //     // Validate if user exist
    //     // const exists = await this.usersRepository.findOne({
    //     //     where: [
    //     //         { username: user.username },
    //     //     ],
    //     // });

    //     // if (exists !== null) { // Exists
    //     //     throw new HttpException(`El usuario ya esta registrado`, HttpStatus.CONFLICT);
    //     // }

    //     const newUser = this.usersRepository.create(user);
    //     const response = await this.usersRepository.save(newUser);

    //     return plainToInstance(ReadUserDto, response);
    // }

    //Función con encriptar
    async create(user: Partial<UserEntity>): Promise<ReadUserDto> {
        // Genera un salt para la encriptación
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(user.password, saltRounds); // Encripta la contraseña
      
        // Crea un nuevo usuario con la contraseña encriptada
        const newUser = this.usersRepository.create({
          ...user,
          password: passwordHash, // Guarda la contraseña encriptada en lugar de la original
        });
      
        // Guarda el nuevo usuario en la base de datos
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

    //Función sin encriptar
    // async findByUserNamePassword(username: string, password: string): Promise<AuthUserDto | undefined> {
    //     const response = await this.usersRepository.findOne({
    //         where: [
    //             { username, password },
    //         ],
    //     });

    //     return plainToInstance(AuthUserDto, response);
    // }

    //Función con encriptar
    async findByUserNamePassword(username: string, password: string): Promise<AuthUserDto | undefined> {
      // Busca el usuario por nombre de usuario
      const user = await this.usersRepository.findOne({ where: { username } });
    
      if (user) {
        // Compara la contraseña proporcionada con la contraseña encriptada almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (passwordMatch) {
          // Si las contraseñas coinciden, puedes devolver el usuario autenticado
          return plainToInstance(AuthUserDto, user);
        }
      }
    
      // Si no se encuentra un usuario o la contraseña no coincide, devuelve undefined
      return undefined;
    }

    //Función sin encriptar
    // async update(user_id: number, user: Partial<UserEntity>): Promise<ReadUserDto> {
    //     await this.usersRepository.update(user_id, user);

    //     const response = await this.usersRepository.findOneBy({ user_id });

    //     return plainToInstance(ReadUserDto, response);
    // }

    //Función con encriptar
    async update(user_id: number, user: Partial<UserEntity>): Promise<ReadUserDto> {
        // Verifica si el usuario proporcionó una nueva contraseña
        if (user.password) {
          // Genera un salt para la encriptación
          const saltRounds = 10;
          const passwordHash = await bcrypt.hash(user.password, saltRounds); // Encripta la nueva contraseña
      
          // Actualiza el usuario con la contraseña encriptada
          await this.usersRepository.update(user_id, { ...user, password: passwordHash });
        } else {
          // Si no se proporcionó una nueva contraseña, simplemente actualiza los otros campos
          await this.usersRepository.update(user_id, user);
        }
      
        const response = await this.usersRepository.findOne({ where: { user_id } });
      
        return plainToInstance(ReadUserDto, response);
      }      

    async remove(user_id: number): Promise<void> {
        await this.usersRepository.delete(user_id);
    }

}
