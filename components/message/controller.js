const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file){

    console.log(user);
    console.log(message);

    return new Promise((resolve, reject) => {

        if (!chat || !user || !message){
            console.error('[messageControler] No hay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }

        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3000/app/files/' + file.fieldname;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            file: fileUrl,
            date: new Date()
        }
        console.log(fullMessage);   
        store.add(fullMessage);

        socket.io.emit('message', fullMessage)

        resolve(fullMessage);
    });
    
};

function getMessages(filterChat){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    })
};

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id)
        console.log(message)
        
        if(!id || !message){
            reject('Invalid Data')
            return false;
        }
        const result = await store.updateText(id, message)
        resolve(result);
    })
};

function deleteMessage(id){
    return new Promise(async (resolve, reject) => {
        if(!id){
            reject('Parametros o ID invcalido');
            return false;
        }
        store.deleteMessage
        store.deleteMessage(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};