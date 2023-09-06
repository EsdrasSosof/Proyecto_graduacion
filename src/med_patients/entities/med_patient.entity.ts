import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedRecordEntity } from '../../med_records/entities';


@Entity({ name: TABLE_NAME.MEDPATIENT })
export class MedPatientEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    patient_id: number;

    @Column({
        nullable: false,
        type: 'bigint',
        comment: 'CUI',
    })
    identification: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'primer nombre',
    })
    first_name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'segundo nombre',
    })
    second_name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'primer apellido',
    })
    lastame: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'segundo apellido',
    })
    second_lastame: string;

    @CreateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Fecha de nacimiento'
    })
    dof: Date;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'dirección residencia',
    })
    address: string;

    @Column({
        nullable: false,
        type: 'bigint',
        comment: 'número de teléfono',
    })
    phone: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'dirección correo',
    })
    email: string;

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

    /**
     * RELATIONS MED_RECORD
     */
    @OneToOne((type) => MedRecordEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'record_id' })
    record_id: MedRecordEntity;
}
