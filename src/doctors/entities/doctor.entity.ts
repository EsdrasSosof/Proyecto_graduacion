import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.DOCTORS })
export class DoctorEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    personal_id: number;

    @Column({
        nullable: false,
        type: 'bigint',
        name: 'user_id',
        comment: 'numero_colegiado',
    })
    member_number: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'nombres',
    })
    name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'apellidos',
    })
    lastame: string;

    // Audit
    @CreateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Date created'
    })
    date_created: Date;

    @UpdateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Date updated'
    })
    date_updated: Date;
}
