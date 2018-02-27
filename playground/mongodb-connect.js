// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected');
  const db = client.db('Users');
  

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    _id: 123,
    name: 'Luke',
    age: 24,
    location: 'Utah'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to connect to User database', err);
    }

    console.log(result.ops[0]._id);
  });

  db.close();
});