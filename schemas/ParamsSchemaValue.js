const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    value: {
      type: Sequelize.STRING,
    },
    paramNameId: {
      type: Sequelize.INTEGER,
    }
  },
  additionales: {
    timestamps: false
  }
}
