require('../db/mongoose');
const User = require('../model/user');
const Task = require('../model/task');




// User.findByIdAndUpdate('60dd4e5dde5c8d33d042c4d7', { email: 'maivanphuongvu@gmail.com' }).then(user => {
//     console.log(user);
//     return User.countDocuments({ email: 'maivanphuongvu@gmail.com' })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })


//async await


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('60dd4e5dde5c8d33d042c4d7', 30).then(count => {
    console.log(count);
}).catch((e) => {
    console.log(e)
});


//
//goal
//
//1. Load in mongoose and task model
//2. Remove a given task by id
//3. Get and print the total number of complete tasks
//4 Test your work


// Task.findByIdAndDelete('60dd3713d89e4c08ac756946').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: true })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

//goal
//change promise to async 

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('60dda08400ac4a4bf01f6926').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
