var gzippo = require('gzippo');
var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev')); //replaces your app.use(express.logger());
 
// app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 3000);
