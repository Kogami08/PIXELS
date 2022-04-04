const express = require('express');
const res  = require('express/lib/response');
const path = require('path');
const app  = express();
const mongoose = require('mongoose');

/*Static Files*/
app.use(express.static(path.join(__dirname, '/public')))

/*SETTINGS*/
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.set('port', process.env.PORT || 4000)
/*FIN DE LOS SETTINGS*/

/*Middlewares*/

app.use(express.urlencoded({extended: false})); /*JSON*/

/*SET DE RUTAS*/

app.get('/', (req, res) => {
    res.render('index')
  })

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/home', (req, res) => {
  res.render('home')
})

/*FINAL DE RUTAS*/

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + '/public/404.html' )
  }) 

module.exports = app;

