const express = require('express');
const { insertSprintGame, getSprintGames } = require('./db');
const { gameSprintSchema } = require('./validation');

const router = express.Router();

router.post('/games/sprint/results', (req, res) => {
  const game = req.body;
  console.log(req.body);
  const result = gameSprintSchema.validate(game);
  if (result.error) {
    console.log(result.error);
    res.status(400).end();
    return;
  }
  insertSprintGame(game)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    })
})

router.get('/games/sprint/results', (req, res) => {
  getSprintGames()
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
      res.json(games);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    })
})

module.exports = router;
