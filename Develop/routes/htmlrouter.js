const express = require('express').Router();
const path = require('path');

router.get("/excercise", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/excercise.html"))
});

router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/stats.html"))
});

module.exports = router;