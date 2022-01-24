const store = require('./store');

function addChat(users){

    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list');
    }
    const chat = {
        users: users,
    };
    return store.add(chat);    
};

function listChatsById(userId) {
    return store.list(userId);
};

module.exports = {
    addChat,
    listChatsById,
}