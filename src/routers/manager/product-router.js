const express = require("express")
const router = express.Router()
const productController=require('../../controllers/manager/product-controller')
const auth=require('../../middlewares/auth')

router.get("/product",auth.authByRole, productController.getProduct)
router.get("/product/add-product",auth.authByRole, productController.getAddProduct)
router.get("/product/:product_id",auth.authByRole, productController.getUpdateProduct)
router.post("/product/add-product/save",auth.authByRole, productController.insertProduct)
router.put("/product/update-product/:product_id",auth.authByRole, productController.updateProduct)
router.put("/product/delete/:product_id",auth.authByRole, productController.deleteProduct)
  
module.exports=router