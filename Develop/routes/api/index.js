const router = require("express").Router();
const db = require('../../model/workout.js')
const workoutrouter = require("./apiRouter.js");


// .use (end point) with variable to point to file.js name
router.use("/api", apiRouter);




module.exports = router;

// need to requrie workout router.js
// index.js is a pointer, think of this file as a door to the respective files.