const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Models/UserModel");
const route = express();

route.get("/", (req, res)=>{
    UserModel.find().then(
        (users)=>{
            res.send(users);
        }
    )
});

route.post("/", (req, res)=>{

});

module.exports = route;