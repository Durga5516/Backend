const express = require('express');
const mongoose = require('mongoose');

const LoginData = new mongoose.Schema({
   Username :{
    type :String
   } ,
   Password :{
    type : String
   }
})

module.exports = mongoose.model("LoginData",LoginData)