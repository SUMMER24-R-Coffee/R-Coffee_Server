const express=require('express')
const router=express.Router()
const orderController=require('../../controllers/manager/order-controller')

router.get('/order',orderController.getOrder);
router.get('/order/order-detail/:order_id',orderController.getOrderDetail);
router.put('/order/order-detail/update-status/:order_id', orderController.updateStatusOrder);

module.exports=router