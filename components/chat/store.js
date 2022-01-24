const Model = require('./model');

function addChat(chat){
    const myChat = new Model(chat);
    myChat.save();
};

function listChatsById(userId){
    return new Promise((resolve, reject) => {
        let = filter = {};
        if(userId){
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if(err){
                    reject(err);
                    return false;
                }
                resolve(populated);
            });
    });
};



module.exports = {
    list: listChatsById,
    add: addChat,
}