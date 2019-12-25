module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("meals", [
      {
        userId: 2,
        mealCategoryId: 1,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        mealCategoryId: 2,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        mealCategoryId: 3,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        mealCategoryId: 4,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("meals", null, {})
};
