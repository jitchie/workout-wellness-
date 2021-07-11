const router = require('express').Router();
const db = require('../../model/workout.js');


router.get('/',(req,res)=> {
    db.find({})
    .then(db => {
        res.join(db);
        },
    )
});

router.post('/', ({body}, res) => {
    db.insertMany(body)
    console.log(body)
    .then(db =>{
        console.timeLog(db);
        res.join(db);
        },
    )
});

router.get('/range',(req,res) => {

});

//need to study how to pull data from monogodb 
//locally first


module.exports = router;

//is the router