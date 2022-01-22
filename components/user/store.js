const Model = require('./model');
 
function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
};

async function getUsers(){
    const users = await Model.find();
    return users;
};

async function updateUser(id, user){
    const foundUser = await Model.findOne({
        id: id
    });
    foundUser.user = user;
    const newUser = await foundUser.save();
    return newUser;
};

function deleteUser(id){
    return Model.deleteOne({
        id:id
    });
};

module.exports = {
    add: addUser,
    list: getUsers,
    modifUser: updateUser,
    delete: deleteUser
}