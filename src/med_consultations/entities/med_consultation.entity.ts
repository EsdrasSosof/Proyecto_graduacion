import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';


@Entity({ name: TABLE_NAME.MEDCONSULTATION })
export class MedConsultationEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    consultation_id: number;

    @Column({
        nullable: false,
        type: 'bigint',
        comment: 'Correlativo de consultas',
    })
    correlative: number;

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

    /**
     * RELATIONS
     */
    //@OneToOne((type) => UserEntity, {cascade: true, eager: true})
    //@JoinColumn({ name: 'user_id' })
    //user_id: UserEntity;
}
