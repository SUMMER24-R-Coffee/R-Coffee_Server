const express= require('express');
const router= express.Router();
const basketController = require('../../controllers/user/basket-controller')

router.get('/api-app/baskets/:email_user', basketController.getBasket)
router.post('/api-app/add-basket', basketController.insertBasket)
router.put('/api-app/update-basket/:basket_id', basketController.updateBasket)
router.delete('/api-app/delete-basket/:basket_id', basketController.deleteBasket)

module.exports= router