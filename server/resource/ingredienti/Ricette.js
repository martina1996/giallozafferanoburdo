var mongoose = require('mongoose');

var ricetteSchema = new mongoose.Schema({

    titolo: {
        type: String,
        required: [true, 'Devi inserire il titolo'],
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
        ref: 'Ingredienti'
    }],
    immagine: {
        type: String,
        default: "http://www.viaggiatorinelmondo.com/wp-content/uploads/2015/10/foca0.jpg"
    }
});

ricetteSchema.pre('save', function (next) {
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('Ricette', ricetteSchema)