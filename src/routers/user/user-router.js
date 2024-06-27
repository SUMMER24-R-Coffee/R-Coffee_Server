const express = require('express')
const router =express.Router()
const userController = require('../../controllers/user/user-controller')

router.post('/api-app/login', userController.login)
router.post('/api-app/request-code', userController.requestCode)
router.post('/api-app/register', userController.register)
router.get('/api-app/user/:email_user', userController.getUser)
router.put('/api-app/update-token/:email_user', userController.updateTokenUser)
router.put('/api-app/update-user', userController.updateUser);
router.put('/api-app/update-password', userController.updatePassword);

module.exports=router