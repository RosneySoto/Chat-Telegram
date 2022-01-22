const store = require('./store')

function addUser(name){

    if(!name){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name,
    };
    return store.add(user);
};

function getUsers(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
};

async function updateUser(id, name){
    return new Promise((resolve, reject) => {
        if(!id || !name){
            reject('Invalid Data')
            return false;
        }
        const result = store.modifUser(id, name)
        resolve(result);
    });
};

module.exports = {
    addUser,
    getUsers,
    updateUser,
}