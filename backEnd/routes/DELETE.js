const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");
// definir rutas de la api

router.delete("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;//obtiene el id del usuario de los parametros de la solicitud
    res.json(await usuarioServ.remove(req.params.id));
  } catch (err) {
    console.error(`Error en el proceso de borrado`, err.message);
    next(err);
  }
});

module.exports = router;
