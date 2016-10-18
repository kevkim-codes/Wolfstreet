var Q = require('q');
var Stock = require('./stockModel.js');

var findStock = Q.nbind(Stock.findOne, Stock);
var createStock = Q.nbind(Stock.create, Stock);
var findAllStocks = Q.nbind(Stock.find, Stock);

module.exports = {
  allStocks: function(req, res, next) {
    findAllStocks({})
      .then(function(stocks) {
        console.log(stocks);
        res.json(stocks);
      })
      .fail(function(error) {
        next(error);
      })
  },

  newStock: function(req, res, next) {
    //todo - come up with way to validate it is a correct stock symbol
    var stock = req.body;
    console.log('stock', stock);
    findStock({ Symbol: stock.Symbol })
      .then(function(match) {
        if (match) {
          res.send(match);
          console.log('MATCH MATCH', match)
        } else {
          var newStock = new Stock({
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
            open: stock.Open,
          });
          newStock.save(function(err) {
            if (err) {
              return next(err);
            }
            res.send(newStock);
          });
        }
      })
  }

  //end of exports
};
