const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("users", [
      {
        username: "admin",
        email: "admin@lifetracker.com",
        password: await bcrypt.hash(
          "123456",
          Number(process.env.PASSWORD_SALT)
        ),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "cesar",
        email: "cesar@cesar.cl",
        password: await bcrypt.hash(
          "123456",
          Number(process.env.PASSWORD_SALT)
        ),

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {})
};
