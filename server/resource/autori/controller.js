module.exports = (function() {

    var Autore = require('./Autore');

    var getAll = function (req, res) {

        var query = Autore.find();

    
        query.exec ()
        .then (function(autori){
            res.json(autori)
        })
    }

    var postOne = function (req, res) {
        var nuovo = new Autore(req.body)
        nuovo.save()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            });
    }
    var deleteOne = function (req, res) {
        Autore.findByIdAndRemove(req.params.id)
            .exec()
            .then(function () {
                res.json("hai cancellato l'autore richiesto")
            })
            .catch(function (err) {
                res.json(err);
            });
    }
    
    return {
        getAll: getAll,
        postOne: postOne,
        deleteOne: deleteOne
    }

})()