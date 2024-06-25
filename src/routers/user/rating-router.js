const express = require('express')
const router = express.Router()
const ratingController = require('../../controllers/user/rating-controller')

router.get('/api-app/ratings/:product_id', ratingController.getRating)
router.get('/api-app/rattings-basket-ids', ratingController.getRatingsByBasketIds);
router.post('/api-app/insert-rating', ratingController.insertRating)

module.exports=router