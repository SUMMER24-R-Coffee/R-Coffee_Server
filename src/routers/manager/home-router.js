const express = require("express")
const router = express.Router()
const homeController=require('../../controllers/manager/home-controller')
const auth = require('../../middlewares/auth')

router.get("/home",auth.authCheck,homeController.getHome)
  
module.exports=router