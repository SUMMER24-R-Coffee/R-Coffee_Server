const express= require('express');
const router= express.Router();

const bannerController= require('../../controllers/user/banner-controller')

router.get('/api-app/banner',bannerController.getBanners)

module.exports=router;