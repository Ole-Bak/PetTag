import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class PetTag {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  species: string;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  medicalNotes: string;
  @Column({ nullable: true })
  ownerName: string;
}
