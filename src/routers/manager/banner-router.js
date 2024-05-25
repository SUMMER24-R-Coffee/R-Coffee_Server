const express = require("express")
const router = express.Router()
const bannerController=require('../../controllers/manager/banner-controller')
router.get("/banner",bannerController.banner)
router.post("/banner/insert-banner",bannerController.insertBanner)
router.delete("/banner/delete/:banner_id",bannerController.deleteBanner)
  
module.exports=router