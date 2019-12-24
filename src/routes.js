const KoaRouter = require("koa-router");

const userRoutes = require("./routes/user");
const alimentRoutes = require("./routes/aliment");
const categoryRoutes = require("./routes/category");

const router = new KoaRouter();

// Unauthenticated routes
router.use("/users", userRoutes.routes());

// Authenticated routes
router.use("/aliments", alimentRoutes.routes());

// Admin routes: soon
router.use("/categories", categoryRoutes.routes());

module.exports = router;
