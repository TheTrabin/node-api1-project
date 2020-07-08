//call express to be required.
const express = require("express");

//punch variable as function: Set up server.
const server = express();

//call the server into listening: Port, callback
server.listen(5000, () => {
    console.log('listening on localhost:', 5000);
})
//run by using node index.js in console