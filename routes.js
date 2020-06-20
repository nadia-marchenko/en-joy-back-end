const express = require('express')
const Joi = require('@hapi/joi')
const { insertGame, getGames, updateQuantity } = require('./db')

const router = express.Router()

const gameSchema = Joi.object().keys({
    userID: Joi.string(),
    date: Joi.date(),
    answers: Joi.array().items(Joi.object().keys({
      word: Joi.string(),
        answered: Joi.boolean()
    })),
    score: Joi.number().integer().min(0)
});

router.post('/games/sprint/results', (req, res) => {
  const game = req.body
  console.log(req.body)
  const result = gameSchema.validate(game)
  if (result.error) {
    console.log(result.error)
    res.status(400).end()
    return
  }
  insertGame(game)
    .then(() => {
      res.status(200).end()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.get('/games/sprint/results', (req, res) => {
  getGames()
    .then((games) => {
      games = games.map((game) => ({
        userID: game.userID,
        date: game.date,
        answers: [
          {
            word: game.answers[0].word,
            answered: game.answers[0].answered
          }
        ],
        score: game.score
      }))
      res.json(games)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

// router.put('/one/:name/sale/:sale', (req, res) => {
//   const { name, sale } = req.params
//   updateQuantity(name, parseInt(sale))
//     .then(() => {
//       res.status(200).end()
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).end()
//     })
// })

module.exports = router
