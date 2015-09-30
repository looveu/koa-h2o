'use strict';

var koa = require('koa');
var app = koa();
var h2o = require('../');

// logger

app.use(h2o.bind(app));

app.listen(3000);