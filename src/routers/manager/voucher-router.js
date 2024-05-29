const express=require('express')
const router=express.Router()
const voucherController=require('../../controllers/manager/voucher-controller')

router.get('/voucher',voucherController.getVoucher)
router.post('/voucher/add-voucher/save', voucherController.insertVoucher)
router.put('/voucher/update-voucher/:voucher_id', voucherController.updateVoucher)
router.put('/voucher/delete/:voucher_id', voucherController.deleteVoucher)

module.exports=router