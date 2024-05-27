const express=require('express')
const router=express.Router()
const employeeController=require('../../controllers/manager/employee-controller')

router.get('/login', employeeController.getLogin)
router.get('/employee',employeeController.employee)
router.post('/login-user', employeeController.checkLogin)

module.exports=router