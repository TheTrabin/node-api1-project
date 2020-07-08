//call express to be required.
const express = require("express");
const shortid = require("shortid");
//Validator
const { body, validationResult } = require('express-validator');
const { checkSchema } = require('express-validator');
//punch variable as function: Set up server.
const server = express();

//inline database mock - 
// let users = [
//      {
//       id: 1,
//       name: 'Samwise Gamgee',
//     },
//     {
//       id: 2,
//       name: 'Frodo Baggins',
//     },
// ];
//CREATE

server.use(express.json());

//CREATE - Works..
//VALIDATION WORKS!!!
server.post('/api/users', (req,res) => {
    const usersInfo = req.body;
    usersInfo.id = shortid.generate();
    //Validate Name - to make sure it's in.
    
    if (!req.body.name) {
        throw new Error({ errorMessage: "Please provide name and bio for the user." })
    }
    //Validate Bio
    if (!req.body.bio) {
        throw new Error({ errorMessage: "Please provide name and bio for the user." })
    }
    //push info to hub array
    users.push(usersInfo);
    //response of successful with return.
    res.status(201).json(usersInfo);
    res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
})

//READ - Works...
server.get('/api/users', (req,res) => {
    res.json(users)
    res.status(500).json({ errorMessage: "The users information could not be retrieved." })
})


//READ - user ID - Works...
server.get('/api/users/:id', (req,res) => {
    const {id} = req.params;
    const person = users.find(user => user.id === id);

    if(person) {
        res.json(person)
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." });
    }
    res.status(500).json({ errorMessage: "The users information could not be retrieved." })
})


//DELETE - Works...
server.delete('/api/users/:id', (req,res) => {
    const {id} = req.params;

    const deleted = users.find(user => user.id === id);

    if (deleted) {
        users = users.filter(user => user.id !== id);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." });
    }
    res.status(500).json({ errorMessage: "The user could not be removed" })
})

//UPDATE - change - Works...
server.patch('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    let found = users.find(user => user.id === id);

    if (found) {
        Object.assign(found, changes);
        res.status(200).json(found);
    } else {
        res.statusMessage(404).json({ message: "The user with the specified ID does not exist." })
    }
})

//UPDATE - replace - Works...
server.put('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    changes.id = id;

    let index = users.findIndex(user => user.id === id);

    if (index !== -1) {
       users[index] = changes;
        res.status(200).json(users[index]);
        if (!req.body.name) {
            throw new Error({ errorMessage: "Please provide name and bio for the user." })
        }
        //Validate Bio
        if (!req.body.bio) {
            throw new Error({ errorMessage: "Please provide name and bio for the user." })
        }

    } else {
        res.statusMessage(404).json(res.statusMessage(404).json({ message: "The user with the specified ID does not exist." }))
    }
    res.status(500).send({ errorMessage: "The user information could not be modified." })
})


//signify port
const PORT = 5000;

//call the server into listening: Port, callback
server.listen(PORT, () => {
    console.log('listening on localhost:', 5000);
})
//run by using node index.js in console