const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c686feff30c50b9a8399b14')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c65de261e09e22ee1e110e3')
    }, {
        $set: {
            name: "Max2"
        },
        $inc: { year: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});