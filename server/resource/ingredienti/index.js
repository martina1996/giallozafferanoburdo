var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.getAll);
router.post('/:id([0-9]{1,4})', controller.postOne)

module.exports = routers;