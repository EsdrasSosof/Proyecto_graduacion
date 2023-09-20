import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { MedicineEntity } from '../../medicines/entities';
import { MedPresciptionEntity } from '../../med_presciptions/entities';


@Entity({ name: TABLE_NAME.MEDDETAIL })
export class DetailEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    detail_id: number;
    // @PrimaryGeneratedColumn({
    //     type: 'bigint',
    // })
    // detail_id: number;

    // @Column({
    //     nullable: false,
    //     type: 'varchar',
    //     length: '260',
    //     comment: 'descripción del detalle',
    // })
    // description: string;

    // Audit
    // @CreateDateColumn({
    //     nullable: false,
    //     type: 'timestamp',
    //     comment: 'Date created'
    // })
    // date_created: Date;

    // @UpdateDateColumn({
    //     nullable: false,
    //     type: 'timestamp',
    //     comment: 'Date updated'
    // })
    // date_updated: Date;

    /**
     * RELATIONS MEDICINE
     */
    @ManyToOne((type) => MedicineEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'medicine_id' })
    medicine_id: MedicineEntity;

        /**
     * RELATIONS PRESCRIPTION
     */
    @ManyToOne((type) => MedPresciptionEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'prescription_id' })
    prescription_id: MedPresciptionEntity;
}
