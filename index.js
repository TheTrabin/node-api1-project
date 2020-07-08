//call express to be required.
const express = require("express");

//punch variable as function: Set up server.
const server = express();

// GET /  server.METHOD(path, callback(request(req), response(res)))
server.get('/', (request, response) => {
    response.json({hello:'world'});
})


//signify port
const PORT = 5000;

//call the server into listening: Port, callback
server.listen(PORT, () => {
    console.log('listening on localhost:', 5000);
})
//run by using node index.js in console