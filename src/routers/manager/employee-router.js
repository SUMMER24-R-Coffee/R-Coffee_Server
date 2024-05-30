const express=require('express')
const router=express.Router()
const employeeController=require('../../controllers/manager/employee-controller')

router.get('/login', employeeController.getLogin)
router.get('/employee',employeeController.getEmployee)
router.post('/login-user', employeeController.checkLogin)
router.post('/employee/save', employeeController.insertEmployee)
router.put('/employee/delete/:emp_id', employeeController.deleteEmployee)

module.exports=router