const express = require('express')
const router =express.Router()
const userController = require('../../controllers/user/user-controller')
const authController = require('../../controllers/user/auth-controller')

router.post('/api-app/login', userController.getLogin)
router.post('api-app/request-code', authController.requestCode)
router.post('api-app/register', authController.register)
router.get('/api-app/user/:email_user', userController.getUser)
router.put('/api-app/update-token/:email_user', userController.updateTokenUser)


module.exports=router