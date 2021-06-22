const Editorial = require('../Models/editorialModel');  

/* Para regitrar un autor */

exports.create = (req, res) => {
 
    const nEditorial = new Editorial({   

        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        maximo: req.body.maximo

    })

    nEditorial.save().then(   

       data =>{
           res.send(data)   
       }
       ).catch(

        error =>{
            res.status(500).send({
                message: error.message || 'Error al registrar la editorial'
            })
        }
       )

}

/* Para mostrar todas las editoriales */


exports.findAll = (req, res) =>{  
    Editorial.find({ })
   
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(500).send({
            message: "Hubo un error en el servidor"
        })
    })
   }

   /* Para buscar una editorial en especifico */

exports.findOne = (req, res) =>{
    const id = req.params.id 
    Editorial.findById(id)
    .then((data)=>{
        if(!data) {
            res.status(404).send({message: "No se encontro la editorial con el id" + id})
        } else {
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({message: "error en el servidor"})
    })
}

/* Metodo para actualizar la informacion de una editorial */

exports.update = (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
    } 
    Editorial.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede editar una editorial inexistente"})
        } else {
            res.send({message: "La editorial se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})
  
    })
  }
  
  /* para eliminar una editorial */
  
  
  exports.delete = (req,res) =>{
    const id = req.params.id 
  
    Editorial.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar la editorial porque no se encontró"})
        } else {
            res.send({message: "Se eliminó la editorial exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
  }
  
  

