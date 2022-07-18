const { Socket } = require('dgram');
const express = require('express');
const app = express();
const port = 3000;
const server = require('http').createServer(app);
app.use(express.static('public'));
server.listen(3000, function () { console.log('Runing server on http://localhost:' + port); })

const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('A new socket connected!');
    socket.on('clientToServer', function (data) {
        console.log(data);
        socket.emit('serverToClient', data)
    })
})