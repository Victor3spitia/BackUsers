const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");



/* POST */
router.post("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.create(req.body));
  } catch (err) {
    console.error(`Error en el proceso de creacion`, err.message);
    next(err);
  }
});

module.exports = router;