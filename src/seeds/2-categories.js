module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("categories", [
      {
        name: "Fruits",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Legumes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vegetables",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Meat",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("categories", null, {})
};
