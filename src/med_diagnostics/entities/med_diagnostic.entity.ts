import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';


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

    /**
     * RELATIONS
     */
    //@OneToOne((type) => UserEntity, {cascade: true, eager: true})
    //@JoinColumn({ name: 'user_id' })
    //user_id: UserEntity;
}
