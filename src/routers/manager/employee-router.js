const express=require('express')
const router=express.Router()
const employeeController=require('../../controllers/manager/employee-controller')
const auth = require('../../middlewares/auth')

router.get('/login', employeeController.getLogin)
router.get('/employee',auth.authByRole,employeeController.getEmployee)
router.post('/login-user', employeeController.checkLogin)
router.post('/employee/save',auth.authByRole, employeeController.insertEmployee)
router.put('/employee/delete/:emp_id',auth.authByRole, employeeController.deleteEmployee)
router.put('/account/update/:emp_id',auth.authCheck, employeeController.updateEmployee)
router.get('/logout', employeeController.checkOut)

module.exports=router