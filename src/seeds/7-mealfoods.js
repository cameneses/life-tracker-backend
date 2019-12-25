module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("mealfoods", [
      {
        mealId: 1,
        foodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 1,
        foodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 2,
        foodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 2,
        foodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 3,
        foodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 3,
        foodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 4,
        foodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mealId: 4,
        foodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("mealfoods", null, {})
};
