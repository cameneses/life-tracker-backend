"use strict";
module.exports = (sequelize, DataTypes) => {
  const mealCategory = sequelize.define(
    "mealCategory",
    {
      name: DataTypes.STRING
    },
    {}
  );
  mealCategory.associate = function(models) {
    mealCategory.hasMany(models.meal);
  };
  return mealCategory;
};
