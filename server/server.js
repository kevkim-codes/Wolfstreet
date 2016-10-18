var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/wolfstreet');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// app.get('/', function (req, res) {
//   res.sendfile(client + 'index.html');
// });

// app.post('/stocks.json', function (req, res) {
//   res.send('Hello World!');
// });

app.listen('3000');
console.log('app listening on port: 3000')

module.exports = app;
