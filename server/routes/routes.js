module.exports = function(app, express){
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    var path = require('path');
    
     app.use('/ingredienti', require('../resource/ingredienti/'));
     app.use('/ricette', require('../resource/ricette/'));
}