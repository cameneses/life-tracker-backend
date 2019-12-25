const checkAdmin = (ctx, next) => {
  console.log(ctx.state.currentUser);
  const { isAdmin } = ctx.state.currentUser;
  if (!isAdmin) {
    ctx.throw(401, "Unauthorized due to admin privileges required");
  }
  return next();
};

module.exports = checkAdmin;
