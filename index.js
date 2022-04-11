const express = require('express');
const res  = require('express/lib/response');
const app  = express();
const port = 3000
const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config(); //seteamos el donenv
const morgan = require('morgan')

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))

app.use(express.urlencoded({extended: false})); //JSON
app.use(morgan('dev'));


//INICIO DE MONGODB (CONEXION)
const MONGODBHOST = process.env.MONGODBHOST;
const MONGODBDATABASE = process.env.MONGODBDATABASE;

const MONGODB_URI = `mongodb://${MONGODBHOST}/${MONGODBDATABASE}`;

mongoose.connect(MONGODB_URI, function(err){ 
    if (err){
        throw err;
    }else{
        console.log(`BIENVENIDO A LA BASE DE ${MONGODB_URI}`)
    }
}) 

.then(db => console.log('Ya jalo la base de datos, CONECTADA'))
.catch(err => console.log(err));

//FIN DE MONGODB (CONEXION)

console.log(process.env.MONGODBDATABASE);// mensaje en la consola

app.use(express.static(__dirname + "/public"))

/*SETE DE RUTAS*/
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/vista2', (req, res) => {
  res.render('vista2')
})
app.get('/vista3', (req, res) => {
  res.render('vista3')
})
app.get('/vista4', (req, res) => {
  res.render('vista4')
})
app.get('/vista5', (req, res) => {
  res.render('vista5')
})

/*FINAL DE RUTAS*/

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + '/public/404.html' )
  }) 

app.listen(port, () => {
    console.log(`la aplicacion esta funcionando en:http://localhost:${port}`)
})