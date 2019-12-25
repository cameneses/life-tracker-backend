module.exports = {
    up: async (queryInterface, Sequelize) =>
      queryInterface.bulkInsert("mealCategories", [
        {
          name: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snack",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]),
  
    down: (queryInterface, Sequelize) =>
      queryInterface.bulkDelete("mealCategories", null, {})
  };
  