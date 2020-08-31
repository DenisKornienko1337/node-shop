'use strict';

const {schema,additionales} = require('../schemas/ParamsSchemaName')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('params_schema_names',schema,additionales)
      await transaction.commit();
    } catch (e){
      console.log(e)
      await transaction.rollback();
      throw e;
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
