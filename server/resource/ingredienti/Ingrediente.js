var mongoose = require('mongoose');
var ingredienteSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    allergene: {
        type: Boolean,
        required: true
    },
    immagine: {
        type: String,
        default: 'images/placeholder-ingrediente.jpg'
    }
});

module.exports = mongoose.model('Ingrediente',ingredienteSchema, 'ingredienti');