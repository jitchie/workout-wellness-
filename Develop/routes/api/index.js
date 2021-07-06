const router = require("express").Router();
const db = require('../../model/workout.js')
const workoutroute =require("./workoutrouter.js");


// .use (pathname) with variable to point to file.
router.use("/workouts", workoutroute);




module.exports = router;

// need to requrie workout router.js
// index.js is a pointer, think of this file as a door to the respective files.