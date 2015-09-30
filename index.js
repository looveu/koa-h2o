'use strict';

var enrouten = require('koa-enrouten');
// var koa = require('koa');
// var app = koa();


exports = module.exports = function h2o(app) {
	console.log(app,'app');
	console.log(this, 'this');
	app.use(enrouten({ directory: 'example/controllers' }));
	app.use(function* (next) {
		console.log(123);
		yield next;
	});
	app.use(function* (next) {
		var start = new Date;
		yield next;
		var ms = new Date - start
		this.set('X-Response-Time', ms + 'ms');
		console.log('%s %s - %s', this.method, this.url, ms);
	});
	return function *(next){yield next;}
	// app.use(enrouten({ directory: 'example/controllers' }));
};