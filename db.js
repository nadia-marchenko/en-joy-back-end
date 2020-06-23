const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb+srv://vgorillovitch:Vlj3U9rKySfXKlol@cluster0-qedge.mongodb.net/en-joy?retryWrites=true&w=majority';
const dbName = 'en-joy';

let db;

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName);
  });

const insertSprintGame = (game) => {
  const collection = db.collection('games/sprint/results');
  return collection.insertOne(game);
};

const getSprintGames = () => {
  const collection = db.collection('games/sprint/results');
  return collection.find({}).toArray();
};

module.exports = { init, insertSprintGame, getSprintGames } 