import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedPatientEntity } from '../../med_patients/entities';
import { MedConsultationEntity } from '../../med_consultations/entities';


@Entity({ name: TABLE_NAME.MEDRECORD })
export class MedRecordEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    record_id: number;

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
     * RELATIONS
     */
    @OneToOne((type) => MedPatientEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'patient_id' })
    patient_id: MedPatientEntity;

        /**
     * RELATIONS
     */
    @OneToOne((type) => MedConsultationEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'consultation_id' })
    consultation_id: MedConsultationEntity;
}
