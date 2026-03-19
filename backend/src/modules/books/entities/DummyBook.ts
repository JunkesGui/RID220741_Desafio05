import { Book } from "./Book";

export const CreateDummyBook = (parId: number, parIsbn: string): Book => {
  return {
    id: parId,
    titulo: "Teste_Titulo",
    num_paginas: 10,
    isbn: parIsbn,
    editora: "Teste_Editora",
  };
};

export const UpdateDummyBook = (parId: number, parIsbn: string): Book => {
  return {
    id: parId,
    titulo: "Edicao_Titulo",
    num_paginas: 20,
    isbn: parIsbn,
    editora: "Edicao_Editora",
  };
};
