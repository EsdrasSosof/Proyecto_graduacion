import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';


@Entity({ name: TABLE_NAME.MEDMEDICINE })
export class MedicineEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    medicine_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'dosis recetada',
    })
    commercial_name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '120',
        comment: 'dosis recetada',
    })
    scientific_name: string;

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

export class Medicine {}
