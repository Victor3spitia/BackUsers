const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");
// definir rutas de la api
/* GET  */
router.get("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error en el proceso de llamado `, err.message);
    next(err);
  }
});

/* POST */
router.post("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.create(req.body));
  } catch (err) {
    console.error(`Error en el proceso de creacion`, err.message);
    next(err);
  }
});

/* PUT  */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await usuarioServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error en el proceso de edicion`, err.message);
    next(err);
  }
});

/* DELETE  */
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
