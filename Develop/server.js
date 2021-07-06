//pulls in npm lib
const express = require("express");
const mongoose = require("mongoose");


//create a port to listen on
const PORT = process.env.PORT || 3000;

//assign express to a variable to use to configer our server.
const app = express();

//app.use middleware for POST and GET data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



//create a connection instance 
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true, 
    useFindAndModify: false
});
const db = mongoose.connection;
//alert if there is an error on connection to DB
db.on('error', (error) => console.error(error));
//confirms connection to DB 
db.once('open', () => console.log('connected to workoutdb'));

//directs express app to routes, where we can link HTML POST and GET
app.use(require('./routes'));
// app.use('./routes/api/apirouter.js');



//creates an event listener to confirm connection to PORT as specified above.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// 1 server file
// 2 set up models and get it to console log
//3 fornt end to display
//4 contorller to glue model and view 