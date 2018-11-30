var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.getAll);
router.post('/', controller.postOne)

module.exports = router;