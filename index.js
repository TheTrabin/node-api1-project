//call express to be required.
const express = require("express");
const shortid = require("shortid");
//punch variable as function: Set up server.
const server = express();

//inline database mock - 
let users = [
     {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
];
//CREATE

//READ

//UPDATE

//DELETE


// GET /  server.METHOD(path, callback(request(req), response(res)))
server.use(express.json());


// server.get('/', (request, response) => {
//     response.json({hello:'world'});
// })

// server.get('/hello', (request, response) => {
//     response.json({ "hello": "Lambda School" });
// })

//CREATE
server.post('/api/users', (req,res) => {
    const usersInfo = req.body;
    usersInfo.id = shortid.generate();

    //push info to hub array
    users.push(usersInfo);
    //response of successful with return.
    res.status(201).json(usersInfo);

})

//READ
server.get('/api/users', (req,res) => {
    res.json(users)
})

//DELETE
server.delete('api/users/:id', (req,res) => {
    const {id} = req.params;

    const deleted = users.find(user => user.id === id);

    if (deleted) {
        users = users.filter(user => user.id !== id);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({message: 'user not found'});
    }
})

//UPDATE - change
server.patch('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    let found = users.find(user => user.id === id);

    if (found) {
        Object.assign(found, changes);
        res.status(200).json(found);
    } else {
        res.statusMessage(404).json({message: 'user id not found'})
    }
})

//UPDASTE - replace
server.put('/api/hubs/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    changes.id = id;

    let index = users.findIndex(user => user.id === id);

    if (index !== -1) {
       users.index = changes;
        res.status(200).json(found);
    } else {
        res.statusMessage(404).json({message: 'user id not found'})
    }
})


//signify port
const PORT = 5000;

//call the server into listening: Port, callback
server.listen(PORT, () => {
    console.log('listening on localhost:', 5000);
})
//run by using node index.js in console