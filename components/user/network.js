const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch( err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
});

router.get('/', function(req, res){
    controller.getUsers(req, res)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'Error al listar Usuarios', 500, err);
        })
});

router.patch('/:id', function(req, res){
    controller.updateUser(req.params.id, req.body.name)

        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno al editar usuario', 500, e);
        });
})

module.exports = router;