const db = require("./db");
const helper = require("../helper");
const config = require("../config");

//get para multiples personas
async function getMultiple(page= 1) { /* page = 1 */
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nombre, email, contraseña, rol, FROM Usuarios LIMIT ?, ?`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {data, meta };
}

//get para una persona por ID
async function getById(id) {
  const rows = await db.query(
    `SELECT id, nombre, email, contraseña, rol, FROM Usuarios WHERE id = ?`,
    [id]
  );

  const data = helper.emptyOrRows(rows);
  return {
    data
  };
}

/* POST para crear nueva informacion */
async function create(usuarioService) {
  const result = await db.query(
    `INSERT INTO Usuarios 
    (nombre, email, contraseña, rol) 
    VALUES (?, ?, ?, ?)`,
    [
      usuarioService.nombre,
      usuarioService.email,
      usuarioService.contraseña,
      usuarioService.rol, 
    ]
  );/* las comillas son solo para los string osea cualquier valor que no sea numero */

  let message = "Error in creating User";

  if (result.affectedRows) {
    message = "User created successfully";
  }

  return { message };
}

/* funcion de PUT para editar informacion ya existente */

async function update(usuarioService) { 
  const result = await db.query(
    `UPDATE Usuarios 
    SET nombre= ?, email= ?, contraseña= ?, rol= ? 
    WHERE id= ?`,
    [
      usuarioService.nombre,
      usuarioService.email,
      usuarioService.contraseña,
      usuarioService.rol,
    ]
  );

  let message = "Error en editar/actualizar info de usuario ";
  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}

/* delete para borrar */
async function remove(id) {
  const result = await db.query(
    `DELETE FROM Usuarios WHERE id= ?`,
    [id]
  );

  let message = "Error En eliminar al usuario";

  if (result.affectedRows) {
    message = "User deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  getById,
  create,
  update,
  remove,
};
