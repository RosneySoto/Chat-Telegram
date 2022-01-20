
//Usamos mongosee para crear la base de datos desde el backend
//Se define el modelo de la base de datos

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: String,
    date: Date,
});

const model = mongoose.model('Message', mySchema);
module.exports = model;
