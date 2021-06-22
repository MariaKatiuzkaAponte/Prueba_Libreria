 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const Autor = mongoose.model('Autor');


const libroSchema = new mongoose.Schema({

    titulo: {type: String, required: true},
    ano: {type: Number, require: true},
    genero: { type: String, required: true},
    paginas: { type: Number, required: true},
    autor:  { type: Schema.ObjectId, ref: "Autor" } ,
    editorial: { type: Schema.ObjectId, ref: "Editorial" }
})

module.exports = mongoose.model('Libro', libroSchema) 