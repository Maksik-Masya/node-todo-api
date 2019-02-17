const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');


const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((data) => {
        res.send(data);
        res.status(200);
    }, (e) => {
        res.status(400);
        res.send(e);
    });

});




app.listen(3000, () => {
    console.log(`Starting up on port 3000`);
});