
const Model = require('./model');



function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message); //Instanciamos 
    myMessage.save(); 
}

async function getMessages(){
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function deleteMessage(id) {
    return Model.deleteOne({
        id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    deleteMessage: deleteMessage,
}