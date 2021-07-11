const router= require("express").Router();
const apiRouter = require("./api/apiRouter");
const htmlRouter =require("./htmlRouter");

router.use  ("/api",apiRouter);
router.use("/",htmlRouter);


module.exports=router;