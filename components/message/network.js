const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

router.get('/', function(req, res){
    
    controller.getMessages()
    .then((messageList)=>{
        response.success(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error inesperado', 500, e);
    })
});

router.delete('/', function(req, res){
    res.send('Mensaje Eliminado Correctamente')
});

router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 400, 'Error en el controllador');
        })

});

router.patch('/:id', function (req, res){
    console.log(req.params.id);
    controller.updateMessage (req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });        
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch( e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
})

module.exports = router;