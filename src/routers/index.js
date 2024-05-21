const home=require('./manager/homeRouter')
const product=require('./manager/productRouter')
function route(app) {
  app.use('/', home)
  app.use('/',product)

};

module.exports = route;