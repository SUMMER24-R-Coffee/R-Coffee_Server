const express= require('express');
const router= express.Router();
const basketController = require('../../controllers/user/basket-controller')

router.get('/api-app/basket/:order_id', basketController.getBasketByOrd)
router.get('/api-app/baskets/:email_user', basketController.getBasket)
router.post('/api-app/insert-basket', basketController.insertBasket)
router.put('/api-app/update-basket/:basket_id', basketController.updateBasket)
router.delete('/api-app/delete-basket/:basket_id', basketController.deleteBasket)
router.post('/api-app/add-to-basket', basketController.addToBasket);
router.post('/api-app/update-to-basket', basketController.updateToBasket)
router.put('/api-app/update-order-id-basket', basketController.updateOrderIDBasket);

module.exports= router