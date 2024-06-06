const express= require('express');
const router= express.Router();

const categoryController = require('../../controllers/user/category-controller')

router.get('/api-app/categories', categoryController.getCategory)

module.exports= router;