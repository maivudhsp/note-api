//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'TaskApp';

MongoClient.connect(connectionURL, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connect to MongoDB server');
    var db = client.db(databaseName);
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    //insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'maivu',
    //     age: 40,
    //     location: 'Binh Tan'

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert to db', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    //insertMany

    // db.collection('Users').insertMany([
    //     {
    //         name: 'name1',
    //         age: 28
    //     },
    //     {
    //         name: 'name2',
    //         age:30
    //     }
    // ], (err, result) => {
    //      if (err) {
    //          return console.log('Unable insert to db', err);
    //      }
    //      console.log(result.insertedCount);
    // })
    
    client.close();
})