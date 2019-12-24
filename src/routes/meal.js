const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.post("meal.create", "/", async ctx => {
  const { date, foodIds, mealCategoryId } = ctx.request.body;
  try {
    const meal = await ctx.orm.meal.create({ date, mealCategoryId });
    // Associate the foods with the meal
    // for (let id of foodIds)
    // {
    //     const
    // }

    ctx.body = { meal };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("meal.show", "/:id", async ctx => {
  const { id } = ctx.params;
  const meal = await ctx.orm.meal.findOne({
    where: { id }
  });
  if (meal) {
    ctx.body = { meal };
  } else {
    ctx.throw(404, "Food not found");
  }
});

module.exports = router;
