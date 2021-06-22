module.exports = (app) => {

    const libro = require("../Controllers/libroController")
  

    app.post("/libro/create", libro.check, libro.create);
    app.get("/libros", libro.relacionAutor);
    app.get("/editorial", libro.relacionEditorial);
    app.get('/libros/get/:id', libro.findOne);
    app.put('/libros/update/:id', libro.update);
    app.delete('/libros/delete/:id', libro.delete)

   

}