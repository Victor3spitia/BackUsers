const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const bcrypt = require('bcrypt');

async function registerUser(nombre, correo, contraseña) {
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  // Save hashedPassword instead of plain contraseña
}

async function loginUser(correo, contraseña) {
  const user = await getUserByCorreo(correo);
  if (!user) return null;
  const match = await bcrypt.compare(contraseña, user.contraseña);
  if (!match) return null;
  // Proceed with JWT generation
}

//------------

//get para multiples personas

  async function getMultiple(page = 1) { // page es el numero de pagina que se quiere ver
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nombre, email, contraseña, rol FROM Usuarios LIMIT ?, ?`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page, total: data.length };  // Agregar total de registros a la metadata
  return { data, meta };
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

//metodo para login
async function login(usuarioService) {
  const result = await db.query( //WHERE (nombre = ? OR email= ?) AND contraseña = ?
    `SELECT nombre, email, contraseña, rol FROM Usuarios WHERE nombre = ? AND contraseña = ?`,
    [ 
      usuarioService.nombre, 
      usuarioService.contraseña,
    ]
  );
    let message = "Error en el login";
    if (result.affectedRows) {
    message = "ingreso exitoso";
  }
  return { message };
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

  let message = "Error en crear usuario";
  if (result.affectedRows) {
    message = "User creado exitosamente";
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
    message = "User actualizado exitosamente";
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
    message = "User eliminado exitosamente";
  }

  return { message };
}

module.exports = {
  getMultiple,
  getById,
  create,
  update,
  remove,
  registerUser,
  loginUser,
};
