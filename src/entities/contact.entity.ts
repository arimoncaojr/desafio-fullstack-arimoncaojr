import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Client from "./client.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  fullName: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ unique: true, length: 9 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts, { nullable: true })
  @JoinColumn()
  client: Client;
}

export default Contact;
