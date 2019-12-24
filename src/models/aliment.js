"use strict";
module.exports = (sequelize, DataTypes) => {
  const aliment = sequelize.define(
    "aliment",
    {
      name: DataTypes.STRING,
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id"
        },
        allowNull: false
      },
      servingSize: DataTypes.STRING,
      calories: DataTypes.FLOAT,
      fat: DataTypes.FLOAT,
      protein: DataTypes.FLOAT,
      carbs: DataTypes.FLOAT
    },
    {}
  );
  aliment.associate = function(models) {
    aliment.belongsTo(models.category);
    aliment.hasMany(models.food);
  };
  return aliment;
};
