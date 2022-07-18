const express = require('express');
const app = express();
const port = 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));
server.listen(port, function () { console.log('Runing server on http://localhost:' + port); })

io.on('connection', (socket) => {
    console.log('A new connection.');
    socket.on('moveDot', (pos) => {
        console.log(pos);
        io.emit('syncDot', pos)
    })
})
