const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.post("meal.create", "/", async ctx => {
  const { date, foodIds, mealCategoryId } = ctx.request.body;
  const { id } = ctx.state.currentUser;
  try {
    const meal = await ctx.orm.meal.create({
      date,
      mealCategoryId,
      userId: id
    });

    await Promise.all(
      foodIds.map(async foodId => {
        const food = await ctx.orm.food.findOne({ where: { id: foodId } });
        await meal.addFood(food);
      })
    );
    ctx.body = { meal };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("meal.list", "/", async ctx => {
  const { id } = ctx.state.currentUser;
  const user = await ctx.orm.user.findOne({ where: { id } });
  const meals = await user.getMeals({
    include: [{ model: ctx.orm.mealCategory }]
  });
  ctx.body = { meals };
});

router.get("meal.show", "/:id", async ctx => {
  const { id } = ctx.params;
  const meal = await ctx.orm.meal.findOne({
    where: { id },
    include: [{ model: ctx.orm.food, include: [{ model: ctx.orm.aliment }] }]
  });
  if (meal) {
    ctx.body = { meal };
  } else {
    ctx.throw(404, "Food not found");
  }
});

module.exports = router;
