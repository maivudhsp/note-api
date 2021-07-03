const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log('Unable connect to MongoDb server');
    }
    const db = client.db('TaskApp');
    console.log('Connect to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('60dc47ee3d4d21219b667cf9')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("Update success");
    // });


    //updateMany
    // db.collection('Todos').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((e) => {
    //     console.log(e);
    // });



    //delete Many
    db.collection('Users').deleteMany({ age: 30 }).then((result) => {
        console.log(result.deletedCount);
    }).catch((e) => {
        console.log(e)
    });


    //deleteOne


    //findOneAndDelete
    //  db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectID('60dc47ee3d4d21219b667cf9')
    // }, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("Delete success");
    // });


    client.close();
});
