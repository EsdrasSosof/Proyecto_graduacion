import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';


@Entity({ name: TABLE_NAME.MOTIVES })
export class MotiveEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    motive_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'nombres',
    })
    name: string;

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
}
