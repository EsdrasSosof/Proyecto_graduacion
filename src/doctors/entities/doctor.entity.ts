import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { UserEntity } from '../../users/entities';

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

    /**
     * RELATIONS
     */
    @OneToOne((type) => UserEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'user_id' })
    user_id: UserEntity;
}
