const express = require ("express");
const router = express.Router();
const usuarioServ = require("../services/usuarioServices");
//

// definir rutas de la api
/* GET  para el usuario*/
router.get("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error en el proceso de llamado `, err.message);
    next(err);
  }
});


// GET usuario por ID
router.get('/:id', async function (req, res, next) {
  try {
    const result = await usuarioServ.getById(req.params.id);
    res.json(result);
  } catch (err) {
    console.error('Error al obtener usuario por ID', err.message);
    next(err);
  }
});



// metodo para login, revisa si esto esta de mas y no lo necesito
/* router.post("/login", async function (req, res, next) {
  try {
    const { nombre, contraseña } = req.body;
    const result = await usuarioServ.login({ nombre, contraseña });
    res.json(result);
  } catch (err) {
    console.error(`Error en el proceso de login`, err.message);
    next(err);
  }
});*/

//metodo para el registro, algo mas opcional por si acaso esto puede que sobre

/* router.post("/registro", async (req, res)=> {
  const { name, password} = req.body
  console.log(req.body)
  try{
    const id = await schema.create({ name, password })
    res.send({ id })
  } catch (error) {
    res.status(400).send( error.message );
    next(err);
  }
}); */


/* POST para los usuarios */
router.post("/", async function (req, res, next) {
  try {
    res.json(await usuarioServ.create(req.body));
  } catch (err) {
    console.error(`Error en el proceso de creacion`, err.message);
    next(err);
  }
}); 



/* PUT para los usuarios */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await usuarioServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error en el proceso de edicion`, err.message);
    next(err); 
  }
});



/* DELETE para los usuarios */
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