"use strict";
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define(
    "meal",
    {
      mealCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "mealCategories",
          key: "id"
        },
        allowNull: false
      },
      date: DataTypes.STRING
    },
    {}
  );
  meal.associate = function(models) {
    meal.belongsTo(models.mealCategory);
  };
  return meal;
};
