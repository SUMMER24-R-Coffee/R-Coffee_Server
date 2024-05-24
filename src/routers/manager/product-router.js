const express = require("express")
const router = express.Router()
const productController=require('../../controllers/manager/product')
router.get("/product",productController.product)
router.get("/product/add-product",productController.addProduct)
  
module.exports=router