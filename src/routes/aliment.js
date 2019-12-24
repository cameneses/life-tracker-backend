const KoaRouter = require("koa-router");

const router = new KoaRouter();

const firstCapitalized = word => word.charAt(0).toUpperCase() + word.slice(1);

router.post("aliment.create", "/", async ctx => {
  const {
    name,
    servingSize,
    calories,
    fat,
    protein,
    carbs,
    categoryId
  } = ctx.request.body;
  try {
    const aliment = await ctx.orm.aliment.create({
      name,
      servingSize,
      calories,
      fat,
      protein,
      carbs,
      categoryId
    });
    ctx.body = { aliment };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("aliment.search", "/search", async ctx => {
  const { by } = ctx.request.query;
  if (by) {
    const aliments = await ctx.orm.aliment.findAll({
      where: {
        name: {
          [ctx.orm.Op.or]: [
            { [ctx.orm.Op.like]: `%${by}%` },
            { [ctx.orm.Op.like]: `%${firstCapitalized(by)}%` }
          ]
        }
      },
      limit: 10
    });
    ctx.body = { aliments };
  } else {
    ctx.body = { aliments: [] };
  }
});

router.get("aliment.show", "/:id", async ctx => {
  const { id } = ctx.params;
  const aliment = await ctx.orm.aliment.findOne({ where: { id } });
  if (aliment) {
    ctx.body = { aliment };
  } else {
    ctx.throw(404, "Aliment not found");
  }
});

module.exports = router;
