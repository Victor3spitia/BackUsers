const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nombre, Email, contraseña, Rol, fecha_creacion 
     FROM Usuarios 
     LIMIT ?, ?`, //placeholders ? para evitar una coneccion directa 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return { data, meta };
}

async function create(usuario) {
  const result = await db.query(
    `INSERT INTO Usuarios 
     (nombre, Email, contraseña, Rol, fecha_creacion) 
     VALUES (?, ?, ?, ?, ?)`,
    [
      usuario.nombre,
      usuario.Email,
      usuario.contraseña,
      usuario.Rol,
      usuario.fecha_creacion,
    ]
  );

  let message = "Error al crear usuario";

  if (result.affectedRows) {
    message = "Usuario creado correctamente";
  }

  return { message };
}

async function update(id, usuario) {
  const result = await db.query(
    `UPDATE Usuarios 
     SET nombre = ?, Email = ?, contraseña = ?, Rol = ?, fecha_creacion = ? 
     WHERE id = ?`,
    [
      usuario.nombre,
      usuario.Email,
      usuario.contraseña,
      usuario.Rol,
      usuario.fecha_creacion,
      id,
    ]
  );

  let message = "Error al actualizar usuario";

  if (result.affectedRows) {
    message = "Usuario actualizado correctamente";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM Usuarios WHERE id = ?`,
    [id]
  );

  let message = "Error al eliminar usuario";

  if (result.affectedRows) {
    message = "Usuario eliminado correctamente";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
