const home=require('./manager/home-router')
const product=require('./manager/product-router')
const banner=require('./manager/banner-router')
const voucher=require('./manager/voucher-router')
const order=require('./manager/order-router')
const employee=require('./manager/employee-router')
function route(app) {
  app.use('/', home)
  app.use('/',product)
  app.use('/',banner)
  app.use('/',voucher)
  app.use('/',order)
  app.use('/',employee)

};

module.exports = route;