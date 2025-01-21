"use strict";

const { DataTypes } = require('sequelize');
const position = require('./position');

module.exports = (sequelize) => { 
    const Employee = sequelize.define('Employee', {
        nome: DataTypes.STRING,
        hireDate: DataTypes.DATE, // Corrigido: Use DATE em vez de Date
        position_id: {
            type: DataTypes.INTEGER,
            field: 'position_id',
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    Employee.associate = function(models) {
        Employee.belongsTo(models.Position, {
            foreignKey: 'position_id',
            as: 'position'
        });
    };
    
    return Employee;
};
