const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");


router.get("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error en el proceso de llamado `, err.message);
    next(err);
  }
});

module.exports = router;