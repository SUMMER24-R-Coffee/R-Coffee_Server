const home=require('./manager/home-router')
const product=require('./manager/product-router')
const banner=require('./manager/banner-router')
const voucher=require('./manager/voucher-router')
const order=require('./manager/order-router')
const employee=require('./manager/employee-router')

// app
const appBanner =require('./user/banner-router');
const appCategory = require('./user/category-router');
const appProduct = require('./user/product-router');
const appUser = require('./user/user-router')
const appRating = require('./user/rating-router')
const appBasket = require('./user/basket-router')
function route(app) {
  app.use('/', home)
  app.use('/',product)
  app.use('/',banner)
  app.use('/',voucher)
  app.use('/',order)
  app.use('/',employee)

  // app
  app.use('/',appBanner)
  app.use('/',appCategory)
  app.use('/', appProduct)
  app.use('/',appUser)
  app.use('/', appRating)
  app.use('/',appBasket)

};

module.exports = route;