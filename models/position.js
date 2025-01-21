"use strict"

const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => { 
    const Position = sequelize.define('Position', {
        title: DataTypes.STRING,
        salary: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })
    
    Position.associate = function(models) {
        Position.hasMany(models.Employee, {
        foreignKey: 'position_id',
        as: 'employees'
        });
    };
    
    return Position;
    }