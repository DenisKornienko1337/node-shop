const Sequelize = require('sequelize');

module.exports = {
  schema: {
    // Customer schema
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    type: {
      type: Sequelize.STRING,
    },
    cartId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    merchantName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // Customer fields
    // personal 
    name:  {
      type: Sequelize.STRING,
      allowNull: true,
    },
    surname:  {
      type: Sequelize.STRING,
      allowNull: true,
    },
    birthday:  {
      type: Sequelize.DATE,
      allowNull: true,
    },
    sex:  {
      type: Sequelize.STRING,
      allowNull: true,
    },
    // contacts
    phone:  {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gmail:  {
      type: Sequelize.STRING,
      allowNull: true,
    }, 
  },
  additionales: {
    timestamps: false
  }
}