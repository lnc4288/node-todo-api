var mongoose = require('mongoose');

//copy the link from "To connect using a driver via the standard MongoDB URI" section
//insert db user name and password here
const REMOTE_MONGO = 'mongodb://idrathershred:i5n0wb04rd@ds251548.mlab.com:51548/node-course-api';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to Mongo instance.')
}, (err) => {
  console.log('Error connecting to Mongo instance: ', err);
});

module.export = { mongoose };