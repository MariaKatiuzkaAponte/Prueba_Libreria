const Autor = require('../Models/autorModel')  

/* Para regitrar un autor */

exports.create = (req, res) => {
 
    const nAutor = new Autor({   

        nombre: req.body.nombre,
        fecha_nacimiento: req.body.fecha_nacimiento,
        ciudad: req.body.ciudad,
        email: req.body.email

    })

    nAutor.save().then(   

       data =>{
           res.send(data)   
       }
       ).catch(

        error =>{
            res.status(500).send({
                message: error.message || 'Error al registrar el autor'
            })
        }
       )

}

/* Para mostrar todos los autores */


exports.findAll = (req, res) =>{  
    Autor.find({ })
   
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(500).send({
            message: "Hubo un error en el servidor"
        })
    })
   }


   
/* Para buscar uno en especifico */

exports.findOne = (req, res) =>{
    const id = req.params.id 
    Autor.findById(id)
    .then((data)=>{
        if(!data) {
            res.status(404).send({message: "No se encontro el autor con el id" + id})
        } else {
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({message: "error en el servidor"})
    })
}

/* Metodo para actualizar la informacion de un autor */

exports.update = (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
    } 
    Autor.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede editar un autor inexistente"})
        } else {
            res.send({message: "El Autor se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})
  
    })
  }
  
  /* para eliminar un autor */
  
  
  exports.delete = (req,res) =>{
    const id = req.params.id 
  
    Autor.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar un autor porque no se encontró"})
        } else {
            res.send({message: "Se eliminó el autor exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
  }
  
  
  
  
