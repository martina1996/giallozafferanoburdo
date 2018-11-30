var express = require('express');
var router = express.Router();
//richiamo il controller
var controller = require('./controller')

//lista di tutte le ricette
router.get('/',controller.getAll)

//recupero una ricetta
//router.get('/:id([a-z0-9]{24})',controller.getOne)

//creazione ricetta
//router.post('/',controller.postOne)

//modifica ricetta
//router.put('/:id([a-z0-9]{24})',controller.putOne)

//elimina ricetta
//router.delete('/:id([a-z0-9]{24})',controller.deleteOne)

//vota ricetta
//router.put('/voto/:id([a-z0-9]{24})',controller.voteOne)

module.exports = router;
