const path = require('path');
const http = require('http');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const routes = require('./routes');
routes(router, app);
app.use(router.routes());

let app = koa();
const debug = process.env.NODE_ENV !== 'production';
var viewDir = debug ? 'build' : 'assets';

app.use(serve(path.resolve(__dirname, viewDir), {maxage: 0}));

app = http.createServer(app.callback());

app.listen(3005, '127.0.0.1', () => console.log('app listen success.'));
