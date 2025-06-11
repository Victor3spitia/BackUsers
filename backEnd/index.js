const express = require("express");
const port = 3000;
const usuariosRouter = require("./routes/DELETE");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

const router = express.Router();

app.use(
  express.urlencoded({
    extended: true,
  })
);
/* este es el que busca el get en el routes */
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const getUser = require ("./routes/GET");
const postUser = require ("./routes/POST");
const putUser = require ("./routes/PUT");
const deleteUser= require ("./routes/DELETE");

// Rutas
router.get("/", getUser);
router.post("/post", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);





/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = router;

