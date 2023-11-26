const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 2004;

const url = "mongodb+srv://xa1244661:ZPRqZWRTGXDHOMx1@cluster0.z8p9yk8.mongodb.net/";
const routes = require("./routes/api");
app.use(express.json());

app.use("/v1/users",routes);

app.use("/",(req, res)=>{
    res.status(200).json({
        hint:"Invalid path !"
    })
})

app.listen(port, ()=>{console.log("Listening on port ",port)});