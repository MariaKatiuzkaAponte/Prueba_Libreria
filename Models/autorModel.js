const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autorSchema = new mongoose.Schema({

    nombre: {type: String, required: true},
    fecha_nacimiento: {type: Number, required: true},
    ciudad: {type: String, require: true},
    email: { type: String, required: true},
    
})

module.exports = mongoose.model('Autor', autorSchema)