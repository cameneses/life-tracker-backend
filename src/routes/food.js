const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.post("food.create", "/", async ctx => {
  const { serving, alimentId } = ctx.request.body;
  try {
    const previousFood = await ctx.orm.food.findOne({
      where: { serving, alimentId }
    });
    if (!previousFood) {
      const food = await ctx.orm.food.create({ serving, alimentId });
      ctx.body = { food };
    } else {
      ctx.body = { food: previousFood };
    }
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("food.show", "/:id", async ctx => {
  const { id } = ctx.params;
  const food = await ctx.orm.food.findOne({
    where: { id },
    include: [{ model: ctx.orm.aliment }]
  });
  if (food) {
    ctx.body = { food };
  } else {
    ctx.throw(404, "Food not found");
  }
});

module.exports = router;
