var stockController = require('../stocks/stockController.js');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/api/stocks', stockController.allStocks);
  app.post('/api/stocks', stockController.newStock);

  //error handlers
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
