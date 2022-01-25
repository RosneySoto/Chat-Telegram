
const { populate } = require('./model');
const Model = require('./model');



function addMessage(message){
    const myMessage = new Model(message); //Instanciamos 
    myMessage.save(); 
}

async function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser !== null){
            filter = {user: filterUser};
        };
        Model.find(filterUser)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                };
                resolve(populated);
            });
    });
};

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