var stockController = require('../stocks/stockController.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {
  app.get('/:code', linksController.navToLink);

  // app.use('/api/links', helpers.decode);
  app.get('/stocks.json', stocksController.allStocks);
  app.post('/stocks.json', stocksController.newStock);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
