const router= require("express").Router();
const apiRouter=require("./api");
const htmlRoutes=require("./htmlrouter");

// router.use("/api",apiRoutes);
router.use("/",htmlRoutes);


module.exports=router;