const store = require('./store');

function addMessage(user, message){

    console.log(user);
    console.log(message);

    return new Promise((resolve, reject) => {

        if (!user || !message){
            console.error('[messageControler] No hay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        console.log(fullMessage);   
        store.add(fullMessage);
        resolve(fullMessage);
    });
    
};

function getMessages(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
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