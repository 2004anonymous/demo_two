const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://xa1244661:ZPRqZWRTGXDHOMx1@cluster0.z8p9yk8.mongodb.net/");
    const userSchema = mongoose.Schema({
        uname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    });
    
const userModel = mongoose.model("mydb",userSchema);

module.exports = userModel;