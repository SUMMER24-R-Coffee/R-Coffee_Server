const express=require('express')
const router=express.Router()
const voucherController=require('../../controllers/manager/voucher-controller')
const auth = require('../../middlewares/auth')

router.get('/voucher',auth.authByRole,voucherController.getVoucher)
router.post('/voucher/add-voucher/save',auth.authByRole, voucherController.insertVoucher)
router.put('/voucher/update-voucher/:voucher_id',auth.authByRole, voucherController.updateVoucher)
router.put('/voucher/delete/:voucher_id',auth.authByRole, voucherController.deleteVoucher)

module.exports=router