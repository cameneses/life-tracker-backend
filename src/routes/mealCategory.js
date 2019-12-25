const KoaRouter = require("koa-router");
const checkAdmin = require("./utils/admin");

const router = new KoaRouter();

// This is an admin only route
router.post("mealCategory.create", "/", checkAdmin, async ctx => {
  const { name } = ctx.request.body;
  try {
    const mealCategory = await ctx.orm.mealCategory.create({ name });
    ctx.body = { mealCategory };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("mealCategory.all", "/", async ctx => {
  const categories = await ctx.orm.mealCategory.findAll();
  ctx.body = { categories };
});

// TODO: This should return currentUser meals
router.get("mealCategory.meals", "/:name", async ctx => {
  const { name } = ctx.params;
  const { id } = ctx.state.currentUser;
  try {
    const mealCategory = await ctx.orm.mealCategory.findOne({
      where: { name },
      include: [{ model: ctx.orm.meal, where: { userId: id } }]
    });
    ctx.body = { mealCategory };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

module.exports = router;
