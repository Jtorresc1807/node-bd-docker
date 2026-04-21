const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_base_defecto', 'root', 'root', {
    host: 'base_datos_mysql',
    port: 3306,
    dialect: 'mysql'
});


async function testConexion(){
    try {
        await sequelize.authenticate();
        console.log('CONEXION CORRECTA CON BD.');
      } catch (error) {
        console.error('ERROR DE CONEXION CON BD: ', error);
      }
}

testConexion();

module.exports = sequelize;