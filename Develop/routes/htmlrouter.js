// folder points to static html in the public folder and serves as requested
const router = require('express').Router();
//no longer require path for this folder.

//going to path appends to public folder if files are already in a public folder you can use 
//redirect method because redirect knows.
router.get("/exercise", (req, res) =>{
    res.redirect('exercise.html')
});

//home route or root 
router.get("/", (req,res)=>{
    res.redirect('index.html')
});


router.get("/stats", (req,res)=>{
    res.redirect('stats.html')
});

module.exports = router;

//be sure to export