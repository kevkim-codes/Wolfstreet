// var Q = require('q');
var Stock = require('./stockModel.js');

// Promisify a few mongoose methods with the `q` promise library
// var findStock = Q.nbind(Stock.findOne, Stock);
// var createStock = Q.nbind(Stock.create, Stock);
// var findAllStocks = Q.nbind(Stock.find, Stock);

module.exports = {

  allStocks: function(req, res, next) {
      res.send(req.data);
  },

  newStock: function(req, res, next) {
    //todo - come up with way to validate it is a correct stock symbol
    res.send(req.data);
  }
};
