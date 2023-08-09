import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.SPECIALIZATION })
export class SpecializationEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    specialization_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'descripción',
    })
    description: string;

    /**
     * RELATIONS
     */
    //@OneToOne((type) => UserEntity, {cascade: true, eager: true})
    //@JoinColumn({ name: 'user_id' })
    //user_id: UserEntity;
}
