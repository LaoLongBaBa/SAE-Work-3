//Loop

const port = 4000;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('User : Bao');
})

app.get('/number', function (req, res) {
    var numList = "<ul>";

    for (let i = 2; i < 1001; i++) {
        if (i % 2 == 0) {
            numList += "<li>" + i + "</li>";
        } else {
            continue
        }
    }
    numList += "</ul>";
    res.send(numList)
})

app.get('/number', function (req, res) {
    var numList = "<ul>";

    for (let i = 2; i < 1001; i++) {
        if (i % 2 == 0) {
            numList += "<li>" + i + "</li>";
        } else {
            continue
        }
    }
    numList += "</ul>";
    res.send(numList)
})

//FizzBuzz 是可以除以三和五的数
app.get('/FizzBuzz', function (req, res) {
    var numList2 = "<ul>";

    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0)
                numList2 += "<li>FizzBuz</li>";
            else
                numList2 += "<li>Fizz</li>";
        }
        else if (i % 5 == 0) {
            numList2 += "<li>Buz</li>";
        }
        else {
            continue
        }
    }
    numList2 += "</ul>";
    res.send(numList2)
})

app.listen(port, function () { console.log('The sever is require on http://localhost:' + port); })