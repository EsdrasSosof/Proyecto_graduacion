# API Nestjs

## Description

Boilerplate that include:
* TypeORM with Mysql
* Basic User Entity
* TypeORM Migration and Seed for User Entity
* Basic CRUD of User Entity
* Auth with JWT
* Security endpoints
* Global configuration file

## Create .env file and set values

```bash
See env-example file
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## TypeORM Migration

### Migrate from entity
```bash
$ npm run typeorm -- -d ./src/configuration/typeorm.config.ts migration:generate ./src/database/migrations/CreateRoles
```

### Empty migrate
```bash
$ npm run typeorm -- migration:create ./src/database/migrations/CreateRoles
```

### Generate seed migrate
```bash
$ npm run typeorm -- migration:create ./src/database/seeders/SeedRoles
```

## Documentation

- Official - [NestJS](https://docs.nestjs.com/)
- ORM - [TypeORM](https://typeorm.io/)
