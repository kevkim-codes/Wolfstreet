var stockController = require('../stocks/stockController.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {

  app.get('/stocks.json', stockController.allStocks);
  app.post('/stocks.json', stockController.newStock);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
