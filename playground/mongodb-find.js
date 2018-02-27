// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a94972dd36e7371803c6d6c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Luke'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch from Users database');
  });

  // db.close();
});