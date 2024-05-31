const express = require("express")
const router = express.Router()
const bannerController=require('../../controllers/manager/banner-controller')
const auth = require('../../middlewares/auth');


router.get("/banner",auth.authByRole,bannerController.banner)
router.post("/banner/insert-banner",auth.authByRole,bannerController.insertBanner)
router.delete("/banner/delete/:banner_id",auth.authByRole,bannerController.deleteBanner)
  
module.exports=router