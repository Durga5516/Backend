const express = require('express')
const multer = require('multer')
const path = require('path')

const MyStorage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"public")
    },
    filename : function(req, file, cb){
        cb(null,'DSP'+path.extname(file.originalname))
    }
})     

const MyFileFilter = (req, file, cb) => {
    const MyfileExtensions = /png|jpg/
    const value = MyfileExtensions.test(path.extname(file.originalname))
    if( value == true)
    {
        cb(null,true)
    }
    else{
        cb("Plz Upload Correct Image Formate")
    }
}

const upload = multer({
    storage :MyStorage,
    fileFilter : MyFileFilter,
    limits : {
        fileSize : 1000000
    }
}).single("file")

const ImageUpload = (req, res) => {
    upload(req, res, (err) => {
        if(err)
        {
            return res.status(400).json(err)
        }
        return res.status(200).json('Image uploaded')
    })
}

const Testing = (req,res) => {
    return res.status(200).json('working')

}

exports.ImageUpload = ImageUpload;
exports.Testing = Testing;



