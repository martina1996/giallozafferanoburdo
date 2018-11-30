var mongoose = require('mongoose');
var ingredienteSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    allergene: {
        type: Boolean,
        required: true
    },
    immagine: {
        type: String,
        default: 'https://i2.wp.com/sassyminxnails.com.au/wp-content/uploads/2017/02/icon-ingred.png'
    }
});

module.exports = mongoose.model('Ingrediente',ingredienteSchema, 'ingredienti');