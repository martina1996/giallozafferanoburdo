var mongoose = require('mongoose');
var ingredienteSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    allergene: {
        type: String,
        required: true,
        enum: ['si', 'no']
    }
});

module.exports = mongoose.model('Ingrediente',ingredienteSchema);