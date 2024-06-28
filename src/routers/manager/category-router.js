const express = require("express")
const router = express.Router()
const categoryController = require("../../controllers/manager/category-controller")
const auth = require('../../middlewares/auth');

router.get('/category',auth.authByRole, categoryController.getCategory)
router.post('/category/insert-category', auth.authByRole, categoryController.addCategory)
router.put('/category/update-category/:category_id', auth.authByRole, categoryController.updateCategory)


  
module.exports=router