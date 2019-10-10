import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Message {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  message: string

  @Column()
  author: string
}

export default Message