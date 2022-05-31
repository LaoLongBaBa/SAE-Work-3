const port = 3000;
var name = ['A', 'B', 'C', 'D'];

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/nodemon', function (req, res) {
    res.send('IM NODEMON')
})

app.get('/users', function (req, res) {
    res.send('The Name are : ' + name.join(', '));
})

app.get('/users/:NameNo', function (req, res) {
    res.send(name[req.params.NameNo]);
})

app.get('/html', function (req, res) {
    res.send(
        `
    <h1 style='color:red'>HI BRO</h1>
    <p>COME ON</p>
        `
    );
})

app.get('/nameFormatted', function (req, res) {
    var nameFormatted = "<ul>";

    for (let i = 0; i < name.length; i++) {
        nameFormatted += "<li>" + name[i] + "</li>"
    }

    nameFormatted += "</ul>";
    res.send(nameFormatted);
})

app.use('/static',express.static('Test'))

app.listen(port, function () { console.log('The sever is require on http://localhost:' + port); })