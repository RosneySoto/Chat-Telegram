const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addChat(req.body.user)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch( err => {
            response.error(req, res, 'Error en el network del chat', 500, err);
        });
});

router.get('/:userId', function(req, res){
    controller.listChatsById(req.params.userId)//para traer toda la lista de chat es sin parametros
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch( e =>{
            response.error(req, res, 'Error al listtar chats', 500, e);
        });
});

module.exports = router;