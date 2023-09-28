// src/entities/Note.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: true })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    creation_date: Date;

    @Column({ type: 'timestamp', nullable: true })
    update_date: Date;
}