var mongoose = require('mongoose');
var autoreSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        default: '/images/placeholder-autore.jpg'
    }
});

module.exports = mongoose.model('Autore', autoreSchema, 'autori');