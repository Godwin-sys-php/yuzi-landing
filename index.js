const express = require('express');

const app = express()
const port = 3010


const server = require('http').Server(app);

// // Default Index Page
app.use("/assets", express.static(__dirname + '/assets'));
// Send all other items to index file
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

server.listen(port, function () {
  console.debug(`listening on port ${port}`);
});