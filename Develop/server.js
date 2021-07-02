//Aquire all the npm packages.
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

//create a port to listen on
const PORT = process.env.PORT || 3000;

const User = require("../Develop/public/model/model.js");

//assign express to a variable for ease to use methods.
const app = express();


//app.use middleware for POST and GET data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//create a connection instance 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true, 
    useFindAndModify: false
});

//creates an event listener and feedback on connection status in node shell.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
