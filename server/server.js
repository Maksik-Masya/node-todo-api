const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const User = mongoose.model('User', {
   email: {
       type: String,
       required: true,
       trim: true,
       minlength: 1
   }
});

const newUser = new User({
   email: 'test@email.com'
});

newUser.save().then((user) => {
    console.log(`Saved user is: ${JSON.stringify(user, undefined, 2)}`)
}, (err) => {
    console.log('Unable to save the user', err);
});

// const newTodo = new Todo({
//     text: "Cook dinner"
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo: ', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// const newTodo = new Todo({
//     text: '        Edit this video'
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo: ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });