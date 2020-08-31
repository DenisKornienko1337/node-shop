const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customerId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
  },
  additionales: {
    timestamps: false
  }
}
