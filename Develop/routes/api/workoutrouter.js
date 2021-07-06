const router = require('express').Router();
const db = require('../../model/workout')

router.get('/workouts',(req,res)=> {
    db.find({})
    .then(db => {
        res.join(db);
        },
    )
});

router.post('/workouts', ({body}, res) => {
    db.insertMany(body)
    .then(db =>{
        res.join(db);
        },
    )
});

//need to study how to pull data from monogodb 
//locally first


module.exports = router;

//is the router