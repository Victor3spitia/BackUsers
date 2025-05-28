const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page) { /* page = 1 */
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id,nombre,Email,contraseña,Rol,fecha_creacion FROM Usuarios` /* LIMIT ${offset},${config.listPerPage} */
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };
 
  return {
    data,
    meta,
  };
}


async function create(usuarioService) {/* POST para crear nueva informacion */
  const result = await db.query(
    `INSERT INTO Usuarios 
    (nombre,Email,contraseña,Rol,fecha_creacion) 
    VALUES 
    ("${usuarioService.nombre}", "${usuarioService.Email}", "${usuarioService.contraseña}",
     "${usuarioService.Rol}", "${usuarioService.fecha_creacion}")`
  );/* las comillas son solo para los string osea cualquier valor que no sea numero */

  let message = "Error in creating programming language";

  if (result.affectedRows) {
    message = "Programming language created successfully";
  }

  return { message };
}

async function update(id, usuarioService) { /* funcion de PUT para editar informacion ya existente */
  const result = await db.query(
    `UPDATE Usuarios 
    SET nombre="${usuarioService.nombre}", Email=${usuarioService.Email}, contraseña=${usuarioService.contraseña}, 
    rol=${usuarioService.Rol}, fecha_creacion=${usuarioService.fecha_creacion} 
    WHERE id=${id}`
  );

  let message = "Error en editar info de usuario ";

  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}

async function remove(id) {/* delete para borrar */
  const result = await db.query(
    `DELETE FROM Usuarios WHERE id=${id}`
  );

  let message = "Error En eliminar al usuario";

  if (result.affectedRows) {
    message = "Programming language deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
