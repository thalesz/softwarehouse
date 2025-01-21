'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Positions', {
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      title:{
        type:DataTypes.STRING,
        allowNull:false
      },
      salary:{
        type:DataTypes.FLOAT,
        allowNull:false

      },
      createdAt:{
        type:DataTypes.DATE,
        allowNull:false
      },
      updatedAt:{
        type:DataTypes.DATE,
        allowNull:true
      }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Positions');
  }
};
