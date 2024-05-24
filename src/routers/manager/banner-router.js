const express = require("express")
const router = express.Router()
const bannerController=require('../../controllers/manager/banner')
router.get("/banner",bannerController.banner)
  
module.exports=router