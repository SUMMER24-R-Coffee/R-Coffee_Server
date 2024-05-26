const express=require('express')
const router=express.Router()
const orderController=require('../../controllers/manager/order-controller')

router.get('/order',orderController.order)
router.get('/order/order-detail',orderController.orderDetail)

module.exports=router