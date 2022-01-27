const express = require('express');
const multer = require('multer'); // Con esat dependencia subimos imagenes a nuestro proyecto
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

const upload = multer({ //Lo instanciamos
    dest: 'public/files/',
});

router.get('/', function(req, res){
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
    .then((messageList)=>{
        response.success(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error inesperado', 500, e);
    })
});

                //Con el upload.single('file'), creamos la carpeta upload en el proyecto y guardamos las imagenes
router.post('/', upload.single('file'), function(req, res){
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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