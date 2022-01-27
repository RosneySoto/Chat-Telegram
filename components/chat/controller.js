const store = require('./store');

function addChat(user){
    console.log(user)

    /*if(!user || !Array.isArray(user)){
        return Promise.reject('Invalid user list');
    }*/
    const chat = {
        user: user,
    }
    return store.add(chat);
};

function listChatsById(userId) {//userId
    return store.list(userId);
};

module.exports = {
    addChat,
    listChatsById,
}