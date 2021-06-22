module.exports = (app) =>{

    const editorial = require('../Controllers/editorialController')

    app.post('/editorial/create', editorial.create)
    app.get('/editorial/get', editorial.findAll)
    app.get('/editorial/get/:id', editorial.findOne)
    app.put('/editorial/update/:id', editorial.update);
    app.delete('/editorial/delete/:id', editorial.delete)

}