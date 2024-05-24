const express=require('express')
const router=express.Router()
const employeeController=require('../../controllers/manager/employee')

router.get('/employee',employeeController.employee)

module.exports=router