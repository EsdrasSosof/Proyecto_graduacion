import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';
import { RoleEntity } from '../../roles/entities';
import { TypologyEntity } from '../../typologies/entities';

@Entity({ name: TABLE_NAME.USER })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    user_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'Username',
    })
    username: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '100',
        comment: 'User password',
    })
    password: string;

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
     * RELATIONS ROLE
     * **/
    @ManyToOne((type) => RoleEntity, {cascade: true, eager: true})
    @JoinColumn({ name: 'role_id' })
    role_id: RoleEntity;

    /**
     * RELATIONS TYPOLOGIES
     * **/
    @ManyToOne((type) => TypologyEntity, { createForeignKeyConstraints: false, eager: true })
    @JoinColumn({ name: 'status' })
    status: TypologyEntity;
}
