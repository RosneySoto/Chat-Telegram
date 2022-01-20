const db = require('mongoose');
db.Promise = global.Promise;

//mongodb+srv://admin:123456789*@curso-platzi.t5k97.mongodb.net/test

async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
    })
    .then(()=> console.log('[db] Conectada con exito'))
    .catch(err => console.log('[db]', err));
}

module.exports = connect;

