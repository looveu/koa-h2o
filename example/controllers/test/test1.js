'use strict';

module.exports = function(router){
  router.get('/', function *(next){
    console.log('in here 1');
    this.body = 'Hello koa';
    yield next;
  });
  return router;
};