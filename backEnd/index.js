const express = require("express");
const port = 3000;
const usuariosRouter = require("./routes/usuarioRoutes");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
/* este es el que busca el get en el routes */
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/* este es el apodo para el usuarioRouter que lo llamara */
app.use("/api/usuarios", usuariosRouter); 
app.use("/api/signup", usuariosRouter);
app.use("/api/login", usuariosRouter);

/* manejo de errores middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
