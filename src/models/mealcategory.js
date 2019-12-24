'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealCategory = sequelize.define('mealCategory', {
    name: DataTypes.STRING
  }, {});
  mealCategory.associate = function(models) {
    // associations can be defined here
  };
  return mealCategory;
};