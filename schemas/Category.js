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
      allowNull: true,
      unique: true,
    },
    paramsSchemaId: {
      type: Sequelize.INTEGER,
    }
  },
  additionales: {
    timestamps: false
  }
};