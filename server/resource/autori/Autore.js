var mongoose = require('mongoose');
var autoreSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        default: '/images/avatar.jpg'
    }
});

module.exports = mongoose.model('Autore', autoreSchema, 'autori');