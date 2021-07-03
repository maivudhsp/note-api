const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TaskApp', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

///goal2: Add a password field to user
//1. Setup the field a require String
//2. Ensure the length is greater 6
//3. Trim the password
//4. Ensure that password doesn't contain "password"
//5. Test work

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid');
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: trim,
//         minlegth: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 10,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// });

// const me = User({
//     name: 'maivu',
//     email: 'MAIVU@gmail.com',
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('error', error)
// })

//
// Goal1: Create a model taks
//
// 1. Define model with description and completes fields
// 2. Create a new instance of model
// 3. save the model to database
// 4. Test your work


// Goal2: Add validation and sanitization to task
//
// 1. trim description and make required
// 2. Make completed default false
// 4. Test your work

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });

// const task = new Task({
//     description: 'Leanr mongoose library',
//     completed: true
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })

