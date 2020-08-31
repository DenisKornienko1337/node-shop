const Sequelize = require('sequelize');

module.exports = {
    schema: {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
      },
      customerId: {
          type: Sequelize.INTEGER
      },
      productId: {
          type: Sequelize.INTEGER
      },
      merchantId: {
          type: Sequelize.INTEGER
      },
      rate: {
          type: Sequelize.INTEGER
      },
    },
    additionales: {
        timestamps: false
    }
};
