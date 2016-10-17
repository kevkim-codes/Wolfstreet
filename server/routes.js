var stockController = require('../users/stockController.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {

  // app.use('/api/links', helpers.decode);
  app.get('/api/stocks/', stocksController.allStocks);
  app.post('/api/stocks/', stocksController.newStock);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
