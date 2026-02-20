import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class Book {
  @PrimaryColumn({ type: "int" })
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
