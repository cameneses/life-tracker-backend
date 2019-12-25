const KoaRouter = require("koa-router");
const jwt = require("koa-jwt");

const userRoutes = require("./routes/user");
const alimentRoutes = require("./routes/aliment");
const categoryRoutes = require("./routes/category");
const foodRoutes = require("./routes/food");

const router = new KoaRouter();

// Unauthenticated routes
router.use("/users", userRoutes.routes());

// Check if user is authenticated
router.use(jwt({ secret: process.env.JWT_SECRET, key: "authData" }));
router.use(async (ctx, next) => {
  if (ctx.state.authData.user.id) {
    ctx.state.currentUser = await ctx.orm.user.findByPk(
      ctx.state.authData.user.id
    );
  }
  return next();
});

// Authenticated routes
router.use("/aliments", alimentRoutes.routes());
router.use("/food", foodRoutes.routes());
router.use("/categories", categoryRoutes.routes());

module.exports = router;
