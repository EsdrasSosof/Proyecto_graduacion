import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { UserEntity } from '../../users/entities';
import { SpecializationEntity } from '../../specializations/entities';

@Entity({ name: TABLE_NAME.DOCTORS })
export class DoctorEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'personal_id',
    })
    personal_id: number;

    @Column({
        nullable: false,
        type: 'bigint',
        comment: 'numero_colegiado',
    })
    member_number: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'nombres',
    })
    name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'apellidos',
    })
    lastame: string;

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
     * RELATIONS USER
     */
    @OneToOne((type) => UserEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'user_id' })
    user_id: UserEntity;

        /*
     * RELATIONS SPECIALIZATION
     */
    @OneToOne((type) => SpecializationEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'specialization_id' })
    specialization_id: SpecializationEntity;
}
