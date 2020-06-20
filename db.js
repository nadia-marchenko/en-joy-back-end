const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://localhost:27017';
const dbName = 'en-joy';

let db;

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  });

const insertGame = (game) => {
  const collection = db.collection('games/sprint/results')
  return collection.insertOne(game)
};

const getGames = () => {
  const collection = db.collection('games/sprint/results')
  return collection.find({}).toArray()
};

// const updateQuantity = (name, sale) => {
//   const collection = db.collection('games/sprint/results')
//   return collection.updateOne({ name }, { $set: { sale } })
// }

module.exports = { init, insertGame, getGames } //updateQuantity }
