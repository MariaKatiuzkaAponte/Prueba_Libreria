module.exports = (app) =>{

    const autor = require('../Controllers/autorController')

    app.post('/autor/create', autor.create)
    app.get('/autor/get', autor.findAll)
    app.get('/autor/get/:id', autor.findOne)
    app.put('/autor/update/:id', autor.update);
    app.delete('/autor/delete/:id', autor.delete)



}
