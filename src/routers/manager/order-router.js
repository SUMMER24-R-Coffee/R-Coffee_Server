const express=require('express')
const router=express.Router()
const orderController=require('../../controllers/manager/order-controller')
const auth = require('../../middlewares/auth')

router.get('/order',auth.authCheck,orderController.getOrder);
router.get('/order/order-detail/:order_id',auth.authCheck,orderController.getOrderDetail);
router.put('/order/order-detail/update-status/:order_id',auth.authCheck, orderController.updateStatusOrder);

module.exports=router