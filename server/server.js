const { static } = require('express');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const fs = require('fs');
const app = express();

let server = http.createServer(app);

const path = require('path');

const port = process.env.PORT || 3000;

const prin = path.resolve(__dirname, '../public');

app.use(express.static(prin));
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Server iniciado correctamente en el puerto ${port}`);
});