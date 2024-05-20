const home=require('./homeRouter');
function route(app) {
  app.use('/', home)

};

module.exports = route;