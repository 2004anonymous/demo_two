const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 2004;

const url = "mongodb+srv://xa1244661:ZPRqZWRTGXDHOMx1@cluster0.z8p9yk8.mongodb.net/";
const routes = require("./routes/api");
app.use(express.json());

async function connectToDb(){
    try{
        await mongoose.connect(url);
        console.log("Connected to mongodb !");
        const dataSchema = mongoose.Schema({
            uname:{
                type:String,
                requires:true
            },
            email:{
                type:String,
                requires:true
            }
        })

        const dataModel = mongoose.model("mydb",dataSchema);
        const data = {
            uname:"Kalpana Gogoi",
            email:"kalpana@gmail.com"
        }

        dataModel.insertMany([data]);
    }catch(error){console.error(error);}
}

app.use("/user",routes);
app.use("/",(req, res)=>{
    res.status(200).json({
        hint:"Invalid path !"
    })
})

app.listen(port, ()=>{console.log("Listening on port ",port)});