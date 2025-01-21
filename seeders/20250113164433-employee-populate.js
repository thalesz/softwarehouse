'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        nome: 'John Doe',
        hireDate: new Date('2021-01-01'),
        position_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jane Doe',
        hireDate: new Date('2021-01-01'),
        position_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jim Doe',
        hireDate: new Date('2023-01-01'),
        position_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jill Doe',
        hireDate: new Date('2023-01-01'),
        position_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jack Doe',
        hireDate: new Date('2024-07-02'),
        position_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jenny Doe',
        hireDate: new Date('  2024-07-02'),
        position_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jared Doe',
        hireDate: new Date('2025-01-01'),
        position_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jesse Doe',
        hireDate: new Date('2025-01-01'),
        position_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jasmine Doe',
        hireDate: new Date('2025-01-01'),
        position_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Employees', null, {});

  }
};
