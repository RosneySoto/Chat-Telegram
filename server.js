const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
//const router = require('./components/message/network');
const router = require ('./network/routes');

db('mongodb+srv://admin:123456789*@curso-platzi.t5k97.mongodb.net/test');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

//Aqui estara toda los archivos de html y css
app.use('/app', express.static('public'))



server.listen(3000, function () {
    console.log('La app se esta ejecutando en http://localhost:3000');
});