const Joi = require('@hapi/joi');

const gameSprintSchema = Joi.object().keys({
  userID: Joi.string(),
  date: Joi.date(),
  answers: Joi.array().items(Joi.object().keys({
    word: Joi.string(),
      answered: Joi.boolean()
  })),
  score: Joi.number().integer().min(0)
});

module.exports = { gameSprintSchema } 