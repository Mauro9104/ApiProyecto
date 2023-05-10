const mongoose = require("mongoose");

const Uri = "mongodb+srv://mauro210:Luisa210@cluster0.goupyvt.mongodb.net/USUARIOS";

mongoose.connect(Uri,
{useNewUrlParser:true, 
useUnifiedTopology:true 
})
.then(() => console.log("conexion exitosa de bd"))
.catch(err => console.log("error al conectar bd", err));
const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
}, {collection: 'Users'});

module.exports = mongoose.model('Users', userSchema);


