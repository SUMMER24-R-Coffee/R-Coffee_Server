const express=require('express')
const router=express.Router()
const voucherController=require('../../controllers/manager/voucher')

router.get('/voucher',voucherController.voucher)
module.exports=router