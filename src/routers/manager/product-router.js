const express = require("express")
const router = express.Router()
const productController=require('../../controllers/manager/product-controller')

router.get("/product", productController.getProduct)
router.get("/product/add-product", productController.getAddProduct)
router.get("/product/:product_id", productController.getUpdateProduct)
router.post("/product/add-product/save", productController.insertProduct)
router.put("/product/update-product/:product_id", productController.updateProduct)
router.put("/product/delete/:product_id", productController.deleteProduct)
  
module.exports=router