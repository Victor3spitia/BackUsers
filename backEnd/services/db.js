const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);// se conecta a la base de datos usando datos del archivo
  const [results] = await connection.execute(sql, params);// consulta SQL

  return results;
}

module.exports = {
  query,
};
