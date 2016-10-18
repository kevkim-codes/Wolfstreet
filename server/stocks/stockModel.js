var mongoose = require('mongoose');

var StockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  last_price: Number,
  change: Number,
  change_percent: Number,
  time_stamp: Date,
  market_cap: Number,
  volume: Number,
  change_ytd: Number,
  change_percent_ytd: Number,
  high: Number,
  low: Number,
  open: Number
});


module.exports = mongoose.model('Stock', StockSchema);
