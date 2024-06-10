const express = require('express')
const router =express.Router()
const userController = require('../../controllers/user/user-controller')

router.post('/api-app/login', userController.getLogin)
router.post('/api-app/register', userController.getRegister)

module.exports=router