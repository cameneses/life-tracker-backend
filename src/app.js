require('dotenv').config();

const Koa = require("koa");
const koaBody = require('koa-body');
const logger = require("koa-logger");
const routes = require('./routes');
const orm = require('./models');


const app = new Koa();

// Log all the events
app.use(logger());

// Error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

// Parse request body
app.use(
  koaBody({
    multipart: true,
    keepExtensions: true,
  }),
);

app.use((ctx, next) => {
  ctx.request.method = override.call(
    ctx,
    ctx.request.body.fields || ctx.request.body,
  );
  return next();
});

// Routes middleware
app.use(routes.routes());

module.exports = app;
