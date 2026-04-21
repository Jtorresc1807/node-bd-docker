const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./../config/conexion");

const Producto = sequelize.define(
  'Producto',
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
      // allowNull defaults to true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
        // allowNull defaults to true
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
        // allowNull defaults to true
      },
  },
  {
    // Other model options go here
  },
);

Producto.sync()

module.exports = Producto;