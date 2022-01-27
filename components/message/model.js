
//Usamos mongosee para crear la base de datos desde el backend
//Se define el modelo de la base de datos

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat:{
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type:String,
        required: true,
    },
    date: Date,

    file: String,

});

const model = mongoose.model('Message', mySchema);
module.exports = model;
