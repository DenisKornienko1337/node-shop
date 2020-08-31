const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    categoryId: {
      type: Sequelize.INTEGER,
    },
  },
  additionales: {
    timestamps: false
  }
};
