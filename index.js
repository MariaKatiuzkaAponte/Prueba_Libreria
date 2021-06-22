const express= require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const {connectToDB} = require('./db') 

const app = express();

app.use(cors());
app.use(bodyParser.json());
{connectToDB()};

require('./Routes/autorRoute')(app);
require('./Routes/libroRoutes')(app);
require('./Routes/editorialRoute')(app);


app.listen(3000, ()=>{

    console.log('Escuchando en el puerto 3000')

} )