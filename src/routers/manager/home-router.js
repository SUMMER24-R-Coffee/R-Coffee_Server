const express = require("express")
const router = express.Router()
const homeController=require('../../controllers/manager/home')
router.get("/home",homeController.home)
  
module.exports=router