const KoaRouter = require('koa-router');

const userRoutes = require('./routes/user');

const router = new KoaRouter();

router.use('/users', userRoutes.routes());

module.exports = router;