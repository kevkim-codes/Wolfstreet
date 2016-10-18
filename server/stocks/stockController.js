var Q = require('q');
var Stock = require('./stockModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findStock = Q.nbind(Stock.findOne, Stock);
var createStock = Q.nbind(Stock.create, Stock);
var findAllStocks = Q.nbind(Stock.find, Stock);

module.exports = {

  allStocks: function (req, res, next) {
    findAllStocks({})
      .then(function (stocks) {
        res.json(stocks);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newStock: function (req, res, next) {
//todo - come up with way to validate it is a correct stock symbol

    findStock({symbol: symbol})
      .then(function (match) {
        if (match) {
          res.send(match);
        } else {
          //put in a get request then add to DB
          var newStock = {
          //todo create a way to make new stocks through get requests
          };
          return createStock(newStock);
        }
      })
      .then(function (createdStock) {
        if (createdStock) {
          res.json(createdStock);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
};
