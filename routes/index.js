const express = require('express');

const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');
const categoriesRoutes = require('./categories.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoutes);
  router.use('/users', usersRoutes);
  router.use('categories', categoriesRoutes);
}

module.exports = routerApi;
