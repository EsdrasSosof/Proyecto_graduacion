import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { DetailEntity } from '../../details/entities';


@Entity({ name: TABLE_NAME.MEDPRESCRIPTION })
export class MedPresciptionEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    prescription_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'dosis recetada',
    })
    dose: string;

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

    /*
     * RELATIONS MED_DETAIL
     */
    // @ManyToOne((type) => DetailEntity, {cascade: true, eager: true})
    // @JoinColumn({ name: 'detail_id' })
    // detail_id: DetailEntity;
}
