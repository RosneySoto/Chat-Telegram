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

async function deleteUser(id){
    if(!id){
        reject('Invalid Data')
        return false;
    }
    return new Promise((resolve, reject)=> {
        const result = store.delete(id)
        resolve(result);
    });
};

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}