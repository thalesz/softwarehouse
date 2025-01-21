'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('positions', [
      {
        title: 'CEO',
        salary: 100000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CTO',
        salary: 80000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CFO',
        salary: 75000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Software Engineer',
        salary: 60000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Accountant',
        salary: 50000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HR Manager',
        salary: 45000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Office Manager',
        salary: 40000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Receptionist',
        salary: 35000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Janitor',
        salary: 30000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('positions', null, {});
  }
};
