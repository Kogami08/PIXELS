const mongoose = require('mongoose')

const MONGODBHOST = process.env.MONGODBHOST;
const MONGODBDATABASE = process.env.MONGODBDATABASE;

const MONGODB_URI = `mongodb://${MONGODBHOST}/${MONGODBDATABASE}`;

mongoose.connect(MONGODB_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
}) 

.then(db => console.log('Ya jalo la base de datos, CONECTADA'))
.catch(err => console.log(err));