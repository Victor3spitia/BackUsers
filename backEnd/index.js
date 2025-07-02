const express = require("express");
const port = 3000;
const usuariosRouter = require("./routes/usuarioRoutes");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const authenticateToken = require('./middleware/auth');
const cookieParser = require('cookie-parser');
const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;

const cors = require('cors')
const schema = require("./services/schema");
const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser());


function generateToken(user) {
  return jwt.sign({ id: user.id, correo: user.correo }, SECRET_JWT_KEY, { expiresIn: '1h' });
}

app.use(
  express.urlencoded({
    extended: true,
  }) 
);

app.use((req, res, next)=> {
  const token = req.cookies.access_token;
  req.session = { user: null }
  try {
    const data = jwt.verify(token, SECRET_JWT_KEY);
    req.session.user = data;
  } catch  {}

  next(); // seguir a la siguiente ruta o middleware
})

/* este es el que busca el get en el routes */
app.get("/", (req, res) => {
  const { user } = req.session
  res.render('index', { user: user || null });

});

/* este es el apodo para el usuarioRouter que lo llamara */
app.use("/api/Usuarios", usuariosRouter); 
app.use("/api/register", usuariosRouter);
/* este es el apodo para el usuarioRouter que lo llamara */
app.use("/api/post", usuariosRouter); 
//app.use("/api/login", usuariosRouter);

app.post("/api/login", async (req, res)=> {
  const { name, password } = req.body;
  try {
    const user = await schema.login({ name, password });
    const token = jwt.sign(
      { id: user._id, name: user.name}, 
      SERCRET_JWT_KEY, 
      {
      expiresIn: "1h"
      })

      const refreshToken = jwt.sign(
      { id: user._id, name: user.name}, 
      SERCRET_JWT_KEY, 
      { 
      expiresIn: "1h"
      })

    res.send({ user, token })
  } catch (error) { 
    res.status(401).send({ error: error.message });
  }
});

app.post("/api/logout", (req, res)=> {
  res
.clearCookie('access_token');
//.json({ message: 'Logged out successfully' });
})

app.get('/api/protected', authenticateToken, (req, res) => {
  const { user } = req.session;
  if (!user) return res.status(403).send('access not authorized')
    res.render('protected', { user: user || null });
});



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
