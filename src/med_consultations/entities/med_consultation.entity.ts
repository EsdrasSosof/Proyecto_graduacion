import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { DoctorEntity } from '../../doctors/entities';
import { MedDiagnostictEntity } from '../../med_diagnostics/entities';
import { MedPatientEntity } from '../../med_patients/entities';
import { MotiveEntity } from '../../motives/entities';


@Entity({ name: TABLE_NAME.MEDCONSULTATION })
export class MedConsultationEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    consultation_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'razón o motivo de consulta',
    })
    reason: string;

    @CreateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'fecha de consulta'
    })
    date_consultation: Date;


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
     * RELATIONS DOCTOR
     */
     @ManyToOne((type) => DoctorEntity, {cascade: true, eager: true})
     @JoinColumn({ name: 'personal_id' })
     personal_id: DoctorEntity;

    /*
     * RELATIONS MED_DIAGNOSTIC
     */
    @OneToOne((type) => MedDiagnostictEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'correlative_id' })
    correlative_id: MedDiagnostictEntity;

    /**
     * RELATIONS MED_CONSULTATION
     */
    @ManyToOne((type) => MedPatientEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'patient_id' })
    patient_id: MedPatientEntity;

    /**
     * RELATIONS MED_CONSULTATION
     */
    @ManyToOne((type) => MotiveEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'motive_id' })
    motive_id: MotiveEntity;
}
