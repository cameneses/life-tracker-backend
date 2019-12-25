module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("aliments", [
      {
        name: "Apple",
        categoryId: 1,
        servingSize: "1 cup",
        calories: 10,
        fat: 5,
        protein: 3,
        carbs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pear",
        categoryId: 1,
        servingSize: "1 cup",
        calories: 10,
        fat: 5,
        protein: 3,
        carbs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Banana",
        categoryId: 1,
        servingSize: "1 cup",
        calories: 10,
        fat: 5,
        protein: 3,
        carbs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beans",
        categoryId: 2,
        servingSize: "1 cup",
        calories: 10,
        fat: 5,
        protein: 3,
        carbs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("aliments", null, {})
};
