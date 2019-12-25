module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("food", [
      {
        alimentId: 1,
        serving: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        alimentId: 2,
        serving: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        alimentId: 3,
        serving: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        alimentId: 4,
        serving: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("food", null, {})
};
