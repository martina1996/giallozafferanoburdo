var mongoose = require('mongoose');

var ricetteSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: [true, 'Devi inserire il nome'],
        unique: true,
        trim: true,
        index: true
    },
    descrizione: {
        type: String,
        maxlength: 10000,
        required: true
    },
    difficolta: {
        type: String,
        required: true,
        enum: ['bassa', 'media', 'alta']
    },

    votoMedio: {
        type: Number,
        default: 0,
        min: 0,
        max: 10
    },
    nvoti: {
        type: Number,
        default: 0
    },
    votoTot: {
        type: Number,
        default: 0,
        min: 0,
    },

    portata: [{
        type: String,
        required:true,
        enum: ['antipasto', 'primo', 'secondo', 'contorno', 'dolce', 'piattounico']
    }],
    dataCreazione: {
        type: Date,
    },
    ingredienti: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente'
    }],
    immagine: {
        type: String,
        default: "/images/placeholder-ricetta.jpg"
    },
    autore: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autore'
    },
    regione: {
        type: String,
        enum: ['sardegna', 'marche', 'lazio', 'toscana', 'molise', 'basilicata', 'calabria', 'sicilia', 'puglia', 'piemonte', 'lombardia', 'liguria', 'trentino', 'valle d\'aosta', 'emilia romagna', 'veneto', 'friuli venezia giulia', 'abruzzo', 'campania']
    }
});

ricetteSchema.pre('save', function (next) {
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('Ricetta', ricetteSchema, 'ricette')