const express = require('express');
require('./db/mongoose');


//mapping model
const User = require('./model/user');
const Task = require('./model/task');

const app = express();
const port = 3000;

app.use(express.json());

//get home
app.get('/', (req, res) => {
    res.send('REST API COURSE');
})

//create user
app.post('/users', async (req, res) => {
    const user = new User(req.body);

    // user.save().then((user) => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error);
    //     //res.send(error);
    // });

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
    
});

//Read all user
app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
         res.status(500).send(e);
    }

    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send(e);
    // });

});

//Read a users
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {     
        const user = await User.findById(_id)
        if (!user) {
             return res.status(404).send();
          }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
    
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send();
    //      }
    //     res.send(user);
    // }).catch((e) => {
    //     res.status(500).send(e);
    // });

});
//update a users

app.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    console.log(updates);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValidOperation) {
        res.status(400).send({error: 'Invalid updates!'})
    }
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

//delete a user
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    } 

});

//Goal
//
//1. Create endpoint for create task

//Create Task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
         res.status(400).send(e);
    }
    

    // task.save().then((task) => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error);
    //     //res.send(error);
    // });

});

//Read a task
//Goal
//1. Create an endpoint fetching all task
//2. Create an endpoint fetching a task by id
//3. Test with postman

//Read all tasks
app.get('/tasks', async (req, res) => {
    
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(400).send(e);
    }
    // Task.find().then((tasks) => {
    //     res.send(tasks);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
});

//Read a tasks
app.get('/tasks/:id',async (req, res) => {
    const _id = req.params.id;
    
    try {
        const task = await Task.findById(_id);
        if (!task) {
             return res.status(500).send();
         }
         res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(500).send();
    //     }
    //     res.send(task);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })

});

//goal
//1.setup the route
//2. send error if unknown updates
//3. Attemp to update the tasks
// - handle task not found
// - handle validation errors
// - handle success
//4. tset your work


app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    console.log(updates);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
     if (!isValidOperation) {
        res.status(400).send({error: 'Invalid updates!'})
    }
    try {

        const task = await Task.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});


//Goal
//1. delete a task

app.delete('/tasks/:id', async (req, res) => {
    try {
        
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(500).send("task not found");
        }
        res.send(task);

    } catch (e) {
        res.status(500).send(e);
    }
})

//create server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
