import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repository/user.repository';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository
  ],
  exports: [UsersService],
})
export class UsersModule {}
