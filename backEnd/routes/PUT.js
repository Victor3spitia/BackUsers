const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");


/* PUT  */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await usuarioServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error en el proceso de edicion`, err.message);
    next(err);
  }
});

module.exports = router;