const express = require('express');
const mongoose = require('mongoose');

const Student_Schema = new mongoose.Schema({
    Name :{
        type : String
    },
    RollNumber : {
        type : String
    },
    Branch :{
        type : String
    },
    College : {
        type : String
    },
    MobileNumber : {
        type: Number
    },
    Email : {
        type : String
    }
})

module.exports = new mongoose.model("StudentData",Student_Schema);