const mysql = require("mysql2/promise");
const config = require("../config");

//Crea un pool de conexiones a la base de datos. Un pool permite manejar múltiples conexiones de forma eficiente.
const pool = mysql.createPool(config.db);

//Define una función query asincrónica que ejecuta una consulta SQL con parámetros (params) y devuelve los resultados.
async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

module.exports = {
  query,
};