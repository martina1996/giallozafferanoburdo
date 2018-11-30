var mongoose = require('mongoose');

var ricetteSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: [true, 'Devi inserire il nome'],
        unique: true,
        trim: true,
        index: true
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
        default: "http://manjumalhi.com/wp/wp-content/uploads/2018/01/recipe-placeholder-886x668.jpg"
    }
});

ricetteSchema.pre('save', function (next) {
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('Ricetta', ricetteSchema)