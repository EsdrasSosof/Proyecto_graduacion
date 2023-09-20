import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.SPECIALIZATION })
export class SpecializationEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    specialization_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'descripción',
    })
    name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'descripción',
    })
    description: string;
}
