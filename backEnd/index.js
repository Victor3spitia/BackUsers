const express = require("express");
const port = 3000;
const usuariosRouter = require("./routes/usuarioRoutes");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
require("dotenv").config();

app.use(
  express.urlencoded({
    extended: true,
  })
);
/* este es el que busca el get en el routes */
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//Rutas para el registro y el inicio sesion
app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/logout"));

// Ruta para renovar el token de acceso utilizando el token de actualización
app.use("/api/refresh-token", require("./routes/refreshToken"));

app.use("/api/posts", authenticateToken, require("./routes/posts"));




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
