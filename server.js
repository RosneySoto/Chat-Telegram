const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

//const router = require('./components/message/network');
const router = require ('./network/routes');

db('mongodb+srv://admin:123456789*@curso-platzi.t5k97.mongodb.net/test');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

//Aqui estara toda los archivos de html y css
app.use('/app', express.static('public'))



app.listen(3000);
console.log('La app se esta ejecutando en http://localhost:3000');