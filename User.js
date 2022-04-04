const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {type: String, require: true, },
    email: {type: String, require: true},
    password: {type: String, require: true},
},{
    timestamps: true
});

/* Aqui es donde va encriptar la contraseña */
userSchema.methods.crypPass = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

/* para comprobar el cifrado de los passwords */
userSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema)