import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedPresciptionEntity } from '../../med_presciptions/entities';
import { DoctorEntity } from '../../doctors/entities';
import { MedConsultationEntity } from '../../med_consultations/entities';


@Entity({ name: TABLE_NAME.MEDDIAGNOSTIC })
export class MedDiagnostictEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    correlative_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '210',
        comment: 'detalle de símtomas',
    })
    symptom_detail: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '210',
        comment: 'enfermedad preexistente',
    })
    pre_existing: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '210',
        comment: 'enfermedad detectada',
    })
    Detected_disease: string;

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
     * RELATIONS MED-CONSULTATIONS
     */
    @OneToOne((type) => MedConsultationEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'consultation_id' })
    consultation_id: MedConsultationEntity;

    /*
     * RELATIONS MED_PRESCRIPTION
     */
    // @OneToOne((type) => MedPresciptionEntity, {cascade: true, eager: true})
    // @JoinColumn({ name: 'prescription_id' })
    // prescription_id: MedPresciptionEntity;
}
