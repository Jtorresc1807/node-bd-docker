const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./../config/conexion");

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
        // allowNull defaults to true
      },
  },
  {
    // Other model options go here
  },
);

User.sync()

module.exports = User;