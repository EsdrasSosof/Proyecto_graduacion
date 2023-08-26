import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedicineEntity } from '../../medicines/entities';


@Entity({ name: TABLE_NAME.MEDDETAIL })
export class DetailEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    detail_id: number;

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
     * RELATIONS MEDICINE
     */
    @ManyToOne((type) => MedicineEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'medicine_id' })
    medicine_id: MedicineEntity;
}
