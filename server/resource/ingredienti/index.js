var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.getAll);
router.post('/', controller.postOne);
router.delete('/:id([a-z0-9]{24})', controller.deleteOne)

module.exports = router;