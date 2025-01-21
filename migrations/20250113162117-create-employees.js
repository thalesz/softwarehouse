'use strict';


const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
          id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
          },
          nome:{
            type:DataTypes.STRING,
            allowNull:false
          },
          hireDate:{
            type:DataTypes.DATE,
            allowNull:false
          },
          position_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
              model:'positions',
              key:'id',
              onUpdate:'CASCADE',
              onDelete:'SET NULL'
            }
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
    await queryInterface.dropTable('Employees');

  }
};
