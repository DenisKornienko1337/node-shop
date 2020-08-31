const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  additionales: {
    timestamps: false
  }
}