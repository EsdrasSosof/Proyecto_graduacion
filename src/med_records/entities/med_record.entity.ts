import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedPatientEntity } from '../../med_patients/entities';
import { MedConsultationEntity } from '../../med_consultations/entities';
import { MedDiagnostictEntity } from '../../med_diagnostics/entities';
import { MedPresciptionEntity } from '../../med_presciptions/entities';


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
     * RELATIONS MED-CONSULTATION
     */
    @OneToOne((type) => MedConsultationEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'consultation_id' })
    consultation_id: MedConsultationEntity;

    /**
     * RELATIONS MED-DIADNÓSTIC
     */
    @OneToOne((type) => MedDiagnostictEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'correlative_id' })
    correlative_id: MedDiagnostictEntity;

    /**
     * RELATIONS MED-PRESCRIPTION
     */
    @OneToOne((type) => MedPresciptionEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'prescription_id' })
    prescription_id: MedPresciptionEntity;

}
