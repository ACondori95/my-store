const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');
const categoriesRoutes = require('./categories.routes');

function routerApi(app) {
  app.use('/products', productsRoutes);
  app.use('/users', usersRoutes);
  app.use('categories', categoriesRoutes);
}

module.exports = routerApi;
