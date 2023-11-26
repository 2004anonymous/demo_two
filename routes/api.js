const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Models/UserModel");
const route = express();

route.get("/", async (req, res)=>{
    const result = await UserModel.find({},{__v:0});
    res.json(result);
});

route.post("/", async (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    try{
        const userModel = new UserModel(req.body);
    const result = await userModel.save();
    res.status(201).json({
        messege:"New record created !",
        data: result
    })
    }catch(error=> res.send(error));
});

module.exports = route;
