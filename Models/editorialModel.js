const mongoose = require('mongoose');
const editorialSchema = new mongoose.Schema({

    nombre: {type: String, required: true},
    direccion: {type: String, require: true},
    telefono: { type: Number, required: true},
    email: { type: String, required: true},
    maximo: { type: Number, required: true},
    
})

module.exports = mongoose.model('Editorial', editorialSchema) 