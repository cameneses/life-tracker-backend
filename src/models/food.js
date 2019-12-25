"use strict";
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define(
    "food",
    {
      serving: DataTypes.FLOAT,
      alimentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "aliments",
          key: "id"
        },
        allowNull: false
      }
    },
    {}
  );
  food.associate = function(models) {
    food.belongsTo(models.aliment);
    food.belongsToMany(models.meal, { through: "mealfoods" });
  };
  return food;
};
