const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb+srv://vgorillovitch:Vlj3U9rKySfXKlol@cluster0-qedge.mongodb.net/en-joy?retryWrites=true&w=majority';
const dbName = 'en-joy';

let db;

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  });

const insertGame = (game) => {
  const collection = db.collection('games/sprint/results')
  const res = collection.insertOne(game)
  res.then(
    result => console.log(result), // выведет "done!" через одну секунду
    error => console.log(error) // не будет запущена
  );
  return res
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
