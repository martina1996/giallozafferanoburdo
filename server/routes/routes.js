module.exports = function (app, express) {
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    var path = require('path');

    
    app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public','images')));
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/popper', express.static(path.join(__dirname, '..', '..', 'node_modules', 'popper.js', 'dist', 'umd')));
    app.use('/ui-router', express.static(path.join(__dirname, '..', '..', 'node_modules', '@uirouter', 'angularjs', 'release')));
    app.use('/angular-ui-carousel', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-ui-carousel', 'dist')));
    app.use('/toast', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angularjs-toast')));
    app.use('/angular-sanitize', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-sanitize')));
    app.use('/angular-animate', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-animate')));


    // scrivo api per dirgli che sono api (poi devo scrivere api nei getAll ecc...)
    app.use('/api/ingredienti', require('../resource/ingredienti/'));
    app.use('/api/ricette', require('../resource/ricette/'));
    app.use('/api/autori', require('../resource/autori/'));

// questo prendiamo con le pinze: in teoria quando gli do rotta che non funziona rimanda alla homepage

    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
    })

}