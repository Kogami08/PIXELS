const express = require('express');
const res  = require('express/lib/response');
const app  = express();
const port = 3000
const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config(); //seteamos el donenv
const morgan = require('morgan');
const indexRoutes = require('./routes/index');
const Task = require('./views/models/task');
const req = require('express/lib/request');
const router = express.Router();

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))


app.use(express.urlencoded({extended: false})); //JSON
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"))


//INICIO DE MONGODB (CONEXION)
const MONGODBHOST = process.env.MONGODBHOST;
const MONGODBDATABASE = process.env.MONGODBDATABASE;

mongoose.connect(`mongodb://${MONGODBHOST}/${MONGODBDATABASE}`)
.then(db => console.log('Db Connectando'))
.catch(err => console.log(err));

//FIN DE MONGODB (CONEXION)

console.log(process.env.MONGODBDATABASE);// mensaje en la consola


/*SETE DE RUTAS*/
app.get('/', (req, res) => {
  res.render('index')
});
app.get('/login', (req, res) => {
  res.render('login')
});
app.get('/home', (req, res) => {
  res.render('home')
});
app.get('/vista2', (req, res) => {
  res.render('vista2')
});
app.get('/vista3', async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.render('vista3', {
    tasks
  })
});
app.get('/vista4', (req, res) => {
  res.render('vista4')
});
app.get('/vista5', (req, res) => {
  res.render('vista5')
});

app.post('/add', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/vista3');
});

router.get('/delete/:id', (req, res) => {
console.log(req.params)
res.send('recibidoooo!');
})

/*FINAL DE RUTAS

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + '/public/404.html' )
  }) */

app.listen(port, () => {
    console.log(`la aplicacion esta funcionando en:http://localhost:${port}`)
})