import { celebrate, Joi, Segments } from "celebrate";

export const idParamIsValid = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required,
  },
});

export const createBookSchema = celebrate({
  [Segments.BODY]: {
    id: Joi.number().required(),
    titulo: Joi.string().required(),
    num_paginas: Joi.number().required(),
    isbn: Joi.string().required(),
    editora: Joi.string().required(),
  },
});

export const updateBookSchema = celebrate({
  [Segments.BODY]: {
    titulo: Joi.string(),
    num_paginas: Joi.number(),
    isbn: Joi.string(),
    editora: Joi.string(),
  },
});
