const express= require('express');
const router= express.Router();
const favController = require('../../controllers/user/favorite-controller')

router.post('/api-app/in-del-favorite',favController.addOrDeleteFav)

module.exports=router