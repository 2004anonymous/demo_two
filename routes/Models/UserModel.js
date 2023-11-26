const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://xa1244661:ZPRqZWRTGXDHOMx1@cluster0.z8p9yk8.mongodb.net/");
    const userSchema = mongoose.Schema({
        uname:String,
        email:String
    });
    
const userModel = mongoose.model("mydb",userSchema);

module.exports = userModel;