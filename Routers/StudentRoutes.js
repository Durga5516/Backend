const express = require('express');
const Route = express.Router();
const StudentController = require("../Controllers/Students");

Route.post("/image-upload",StudentController.ImageUpload);
Route.get("/testing",StudentController.Testing);

module.exports = Route;