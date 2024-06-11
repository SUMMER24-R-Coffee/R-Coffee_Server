const express = require('express')
const router = express.Router()
const ratingController = require('../../controllers/user/rating-controller')

router.get('/api-app/ratings/:product_id', ratingController.getRating)
router.post('/api-app/insert-ratings', ratingController.insertRating)

module.exports=router