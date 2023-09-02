import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { UserEntity } from '../../users/entities';

@Entity({ name: TABLE_NAME.TYPOLOGIES })
export class TypologyEntity extends BaseEntity {
    @PrimaryColumn({
        type: 'bigint',
        name: 'typology_id',
        comment: 'Id de tipología'
    })
    typology_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        comment: 'Descripción de la tipología',
    })
    description: string;

    // RELACIÓN
    @ManyToOne((type) => UserEntity, { createForeignKeyConstraints: false })
    @JoinColumn({ name: 'created_by' })
    created_by: UserEntity;

    @CreateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Fecha de creación'
    })
    creation_date: Date;

    // RELACIÓN
    @ManyToOne((type) => TypologyEntity, { createForeignKeyConstraints: false })
    @JoinColumn({ name: 'status' })
    status: TypologyEntity;
}

