const mongoose = require('mongoose')

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