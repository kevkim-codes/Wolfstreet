var stockController = require('../stocks/stockController.js');
var helpers = require('./helpers.js');
var path = require ('path');

module.exports = function (app, express) {

  app.get('/', function (req,res) {
    res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
  });

  // app.get('/api/stocks', stockController.allStocks);
  // app.post('/stocks.json', stockController.newStock);

//error handlers
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
