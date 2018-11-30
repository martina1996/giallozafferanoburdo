module.exports = (function() {

    var Ingrediente = require('./Ingrediente');

    var getAll = function (req, res) {

        var query = Ingrediente.find();

        if (req.query.allergene) {
            query.where('allergene').equals(true)
        }
    }

    var postOne = function (req, res) {
        var nuovo = new Ingrediente(req.body)
        nuovo.save()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            });
    }
    
    return {
        getAll: getAll,
        postOne: postOne
    }

})()