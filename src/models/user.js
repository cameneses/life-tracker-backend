"use strict";
const bcrypt = require("bcrypt");

async function buildPasswordHash(instance) {
  if (instance.changed("password")) {
    const hash = await bcrypt.hash(
      instance.password,
      Number(process.env.PASSWORD_SALT)
    );
    instance.set("password", hash);
  }
}

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: true
      },
      password: DataTypes.STRING
    },
    {}
  );

  user.beforeUpdate(buildPasswordHash);
  user.beforeCreate(buildPasswordHash);

  user.prototype.checkPassword = function checkPassword(password) {
    return bcrypt.compare(password, this.password);
  };

  user.associate = function(models) {
    user.hasMany(models.meal);
  };
  return user;
};
