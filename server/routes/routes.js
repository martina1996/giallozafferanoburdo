module.exports = function (app, express) {
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    var path = require('path');

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
    })


    app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')));
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/popper', express.static(path.join(__dirname, '..', '..', 'node_modules', 'popper.js', 'dist', 'umd')));


    app.use('/ingredienti', require('../resource/ingredienti/'));
    app.use('/ricette', require('../resource/ricette/'));
    app.use('/autori', require('../resource/autori/'));

}