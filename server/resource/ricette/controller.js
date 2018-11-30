module.exports = (function () {

    var Ricetta = require('./Ricetta')
    var Ingredienti = require('../ingredienti/Ingrediente')

    var getAll = function (req, res) {

        var query = Ricetta.find();
        if (req.query.difficolta) {
            query.where('difficolta').equals(req.query.difficolta).sort({ field: 1 })
        }
        if (req.query.votomin) {
            query.where('votomin').gt(req.query.votomin).sort({ field: 1 })
        }
        if (req.query.votomax) {
            query.where('votomax').lt(req.query.votomax).sort({ field: 1 })
        }
        if (req.query.portata) {
            query.where('portata').equals(req.query.portata).sort({ field: 1 })
        }
        if (req.query.portata) {
            var portate = req.query.portata.split(",")
            console.log(portate)
            query.where('portata').in(portate).sort({ field: 1 })
        }


        query
            .populate({
                path: 'ingredienti',
                select: ['nome']
            })
            .populate({
                path: 'autore',
                select: ['nome']
            })
            .exec()

            .then(function (ricette) {
                res.json(ricette)
            })
            .catch(function (err) {
                res.json(err);
            });
    }

    var getOne = function (req, res) {

        Ricetta.findById(req.params.id)
            .populate({
                path: 'ingredienti',
                select: ['nome']
            })
            .populate({
                path: 'autore',
                select: ['nome']
            })
            .exec()
            .then(function (ricetta) {
                res.json(ricetta)
            })
            .catch(function (err) {
                res.json(err);
            });
    }

    
    var postOne = function (req, res) {
        var nuovo = new Ricetta(req.body)
        nuovo.save()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            });
    }


    var deleteOne = function (req, res) {
        Ricetta.findByIdAndRemove(req.params.id)
            .exec()
            .then(function () {
                res.json("hai cancellato la ricetta richiesta")
            })
            .catch(function (err) {
                res.json(err);
            });
    }
    var putOne = function (req, res) {
        var body = req.body
        Ricetta.findById(req.params.id)
            .exec()
            .then(function (ricetta) {
                Object.assign(ricetta, req.body)
                return ricetta.save()
            })
            .then(function (ricetta) {
                // res.json('Ricetta aggiornata'); 
                res.json({
                    resp: "Ricetta aggiornata",
                    ricetta: ricetta
                })
            })
            .catch(function (err) {
                throw err;
            });
    }
    var voteOne = function (req, res) {
        var voto = req.body.voto
        Ricetta.findById(req.params.id)
            .exec()
            .then(function (ricetta) {
                ricetta.nvoti += 1;
                ricetta.votoTot += req.body.voto;
                ricetta.votoMedio = (ricetta.votoTot / ricetta.nvoti)
                return ricetta.save();
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    }

    return {
        getAll: getAll,
        getOne: getOne,
        postOne: postOne,
        putOne: putOne,
        deleteOne: deleteOne,
        voteOne: voteOne,
    }
})()