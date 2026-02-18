import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBook1771364087738 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "titulo",
            type: "varchar",
          },
          {
            name: "paginas",
            type: "integer",
          },
          {
            name: "isbn",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "editora",
            type: "varchar",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
