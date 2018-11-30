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
        default: '/images/placeholder-ingrediente.jpg'
    },
    regione: {
        type: String,
        enum: ['sardegna','marche','lazio','toscana','molise','basilicata','calabria','sicilia','puglia','piemonte','lombardia','liguria','trentino','valle d\'aosta','emilia romagna','veneto','friuli venezia giulia','abruzzo','campania']
    }
});

module.exports = mongoose.model('Ingrediente',ingredienteSchema, 'ingredienti');