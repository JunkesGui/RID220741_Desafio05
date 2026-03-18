import { Book } from "./Book";

export const CreateDummyBook = (parId: number): Book => {
  return {
    id: parId,
    titulo: "Teste_Titulo",
    num_paginas: 10,
    isbn: "Teste_ISBN",
    editora: "Teste_Editora",
  };
};
