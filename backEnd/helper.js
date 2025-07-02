//Calcula el desplazamiento (offset) para una consulta paginada en una base de datos.
function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}
//Asegura que una consulta que no devuelve resultados retorne un array vacío, en vez de null o undefined.
function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
};
