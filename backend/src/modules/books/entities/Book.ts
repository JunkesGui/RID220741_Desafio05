import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  titulo: string;

  @Column({ type: "int" })
  paginas: number;

  @Column({ type: "text" })
  isbn: string;

  @Column({ type: "text" })
  editora: string;
}
