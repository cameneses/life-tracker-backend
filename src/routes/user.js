const KoaRouter = require("koa-router");
const jwt = require("jsonwebtoken");

const router = new KoaRouter();

router.post("user.signup", "/signup", async ctx => {
  const { username, email, password } = ctx.request.body;
  try {
    const user = await ctx.orm.user.create({ username, email, password });
    ctx.body = { user };
  } catch (validationError) {
    ctx.throw(500, "Validation error");
  }
});

router.post("user.login", "/login", async ctx => {
  const { email, password } = ctx.request.body;
  const user = await ctx.orm.user.findOne({ where: { email } });
  if (user && (await user.checkPassword(password))) {
    const token = await jwt.sign({ user }, process.env.JWT_SECRET);
    ctx.body = { token };
  } else {
    ctx.throw(401, "Wrong email or password");
  }
});

module.exports = router;
