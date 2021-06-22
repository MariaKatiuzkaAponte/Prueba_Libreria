const Libro = require('../Models/libroModel');
const Editorial = require('../Models/editorialModel');
const Autor = require('../Models/autorModel');



exports.create = (req, res) => {
 
  const nLibro = new Libro({   

    titulo: req.body.titulo,
    ano: req.body.ano,
    genero: req.body.genero,
    paginas: req.body.paginas,
    autor: req.body.autor,
    editorial: req.body.editorial
  })

  nLibro.save().then(   

     data =>{
         res.send(data)   
     }
     ).catch(

      error =>{
          res.status(500).send({
              message: error.message || 'Error al registrar el libro'
          })
      }
     )

}



exports.check = async (req, res, next) => {

  Autor.findById(req.body.autor, function (err, autor) {

    if (!autor) {

      res.send('El autor no esta registrado')

    }

    Editorial.findById(req.body.editorial, function (err, editorial) {
      if (!editorial) {

        res.send('La editorial no esta registrada')

      }

      
      if (editorial.maximo == -1) {

        next();

      }

      Libro.find({ editorial: req.body.editorial }, function (err, libros) {

        if (!libros || libros.length < editorial.maximo) {
          next();
        }

        else {

          res.send('No es posible registrar el libro, se alcanzo el maximo permitido');
        }

      });

    })

  })


};

exports.relacionAutor = (req, res) => {
  Libro.find({}, function (err, libros) {
    Autor.populate(libros, { path: "autor" }, function (err, libros) {
      res.status(200).send(libros);
    });
  }

  )
}

exports.relacionEditorial = (req, res) => {
  Libro.find({}, function (err, libros) {
    Editorial.populate(libros, { path: "editorial" }, function (err, libros) {
      res.status(200).send(libros);
    });
  }

  )
}

/* Metodo para buscar un libro en especifico */

/* Para buscar uno en especifico */

exports.findOne = (req, res) =>{
  const id = req.params.id 
  Libro.findById(id)
  .then((data)=>{
      if(!data) {
          res.status(404).send({message: "No se encontro el libro con el id" + id})
      } else {
          res.send(data)
      }
  })
  .catch((err)=>{
      res.status(500).send({message: "error en el servidor"})
  })
}

/* Metodo para actualizar la informacion de un libro */

exports.update = (req, res) => {
  const id = req.params.id
  if(!req.body){
      return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
  } 
  Libro.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then((data) =>{
      if(!data){
          res.status(404).send({message: "No se puede editar un libro inexistente"})
      } else {
          res.send({message: "El libro se ha actualizado"})
      }
  }) .catch ((err)=> {
      res.status(500). send({message: "Hubo un problema en el servisor"})

  })
}

/* para eliminar un libro */


exports.delete = (req,res) =>{
  const id = req.params.id 

  Libro.findByIdAndRemove(id)
  .then ((data) =>{
      if(!data){
          res.status(404).send({message: "No se puede eliminar el libro porque no se encontró"})
      } else {
          res.send({message: "Se eliminó el libro exitosamente"})
      }
  }) 
  .catch((error) =>{
      res.status(500).send({message: "Hay un problema en el servidor"})
  })
}










