var Q = require('q');
var Stock = require('./stockModel.js');

var findStock = Q.nbind(Stock.findOne, Stock);
var createStock = Q.nbind(Stock.create, Stock);
var findAllStocks = Q.nbind(Stock.find, Stock);

module.exports = {
  allStocks: function(req, res, next) {
    findAllStocks({})
      .then(function(stocks) {
        res.json(stocks);
      })
      .fail(function(error) {
        next(error);
      })
  },

  newStock: function(req, res, next) {
    //todo - come up with way to validate it is a correct stock symbol
    var symbol = req.body.symbol;
    var stock = req.body;
    findStock({ symbol: symbol })
      .then(function(match) {
        if (match) {
          res.send(match);
        } else {
          var newStock = {
            name: stock.Name,
            symbol: stock.Symbol,
            last_price: stock.LastPrice,
            change: stock.Change,
            change_percent: stock.ChangePercent,
            time_stamp: stock.Timestamp,
            market_cap: stock.MarketCap,
            volume: stock.Volume,
            change_ytd: stock.ChangeYTD,
            change_percent_ytd: stock.PercentYTD,
            high: stock.High,
            low: stock.Low,
            open: Stock.Open,
          };
          return createStock(newStock);
        }
      })
      .then(function(createdStock) {
        if (createdStock) {
          res.json(createdStock);
        }
      }).fail(function(error) {
        next(error);
      });
  }

  //end of exports
};
