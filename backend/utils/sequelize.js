const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/mydb.db",
});

const Activity = sequelize.define("activity", {
  date: Sequelize.DATE,
  description: Sequelize.STRING,
  accessCode: Sequelize.STRING,
});

module.exports = {
  sequelize,
  Activity,
};
