const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'TaskApp';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    var db = client.db(databaseName);

    db.collection('Todos').insertOne({
        _id: id,
        text: 'Cook dinner',
        completed: false

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert to do', err);
        }
        console.log(result.ops);
    });

});