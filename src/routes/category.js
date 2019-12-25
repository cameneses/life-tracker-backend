const KoaRouter = require("koa-router");
const checkAdmin = require("./utils/admin");

const router = new KoaRouter();

router.post("category.create", "/", checkAdmin, async ctx => {
  const { name } = ctx.request.body;
  try {
    const category = await ctx.orm.category.create({ name });
    ctx.body = { category };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.get("category.all", "/", async ctx => {
  const categories = await ctx.orm.category.findAll();
  ctx.body = { categories };
});

router.get("category.aliments", "/:name", async ctx => {
  const { name } = ctx.params;
  try {
    const category = await ctx.orm.category.findOne({
      where: { name },
      include: [{ model: ctx.orm.aliment }]
    });
    ctx.body = { category };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

module.exports = router;
