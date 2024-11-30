var express = require('express')
const app = express()
const {getUsersleaveDetails,addNewLeave}  = require("../controllers/empController");

app.get('/get-user-leave', getUsersleaveDetails);
app.patch('/add-new-leave', addNewLeave);

module.exports = app; 
