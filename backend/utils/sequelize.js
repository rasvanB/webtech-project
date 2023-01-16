const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/mydb.db",
});

const Activity = sequelize.define("activity", {
  date: Sequelize.DATE,
  description: Sequelize.STRING,
  accessCode: Sequelize.INTEGER,
  title: Sequelize.STRING,
  professorName: {
    type: Sequelize.STRING,
    references: {
      model: "professors",
      key: "name",
    },
  },
});

const Professor = sequelize.define("professor", {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
});

const Feedback = sequelize.define("feedback", {
  description: Sequelize.STRING,
  date: Sequelize.DATE,
  type: Sequelize.STRING,
  activityId: {
    type: Sequelize.INTEGER,
    references: {
      model: "activities",
      key: "id",
    },
  },
});

Professor.hasMany(Activity, {
  foreignKey: "professorName",
});

Activity.belongsTo(Professor, {
  foreignKey: "professorName",
});

Feedback.belongsTo(Activity, {
  foreignKey: "activityId",
});

Activity.hasMany(Feedback, {
  foreignKey: "activityId",
});

module.exports = {
  sequelize,
  Activity,
  Professor,
  Feedback,
};
