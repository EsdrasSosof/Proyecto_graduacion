import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';


@Entity({ name: TABLE_NAME.MEDMEDICINE })
export class MedicineEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    medicine_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'dosis recetada',
    })
    commercial_name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'dosis recetada',
    })
    scientific_name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '260',
        comment: 'descripción del detalle',
    })
    description: string;

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
