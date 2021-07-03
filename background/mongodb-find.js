//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connect to MongoDB server');
    var db = client.db('TaskApp');
  
    

    //find id
    // db.collection('Users').findOne({ _id: new ObjectID("60df0948dd1db6307458fdec") }, (err, user) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(user);
    // });

    // db.collection('Users').find({ age: 30 }).toArray((err, users) => {
    //     console.log(users);
    // });


    //count document
//    db.collection('Users').find({ age: 30 }).count((err, count) => {
//         console.log(count);
//     });

    
    
    

    client.close();
})