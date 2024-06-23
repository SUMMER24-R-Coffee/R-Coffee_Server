const express = require('express')
const router =express.Router()
const userController = require('../../controllers/user/user-controller')

router.post('/api-app/login', userController.getLogin)
router.post('/api-app/register', userController.getRegister)
router.get('/api-app/user/:email_user', userController.getUser)
router.put('/api-app/update-token/:email_user', userController.updateTokenUser)

module.exports=router