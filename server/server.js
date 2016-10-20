var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/wolfstreet');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen('3000');
console.log('app listening on port: 3000');

module.exports = app;
