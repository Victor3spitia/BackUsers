const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../auth/sign");
//const getUserInfo = require("../lib/getUserInfo");
const Token = require("../schema/token");

// para ingresar un nuevo usuario a la base de datos
const UserSchema = new Mongoose.Schema({
  id: { type: Object },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

UserSchema.pre("save", function (next) { //valida si se modifico el password
  if (this.isModified("password") || this.isNew) {
    const document = this;

    bcrypt.hash(document.password, 10, (err, hash) => { //incriptacion del password
      if (err) {
        next(err);
      } else {
        document.password = hash;
        next();
      }
    });
  } else {
    next();
  }
});
//metodo para validar que el nombre de usuario ya existe
UserSchema.methods.usernameExists = async function (username) {
  const result = await Mongoose.model("User").find({ username: username });
  return result.length > 0;
};

UserSchema.methods.isCorrectPassword = async function (password, hash) {
  console.log(password, hash);
  const same = await bcrypt.compare(password, hash);

  return same;
};
//genera los tokens para el login
UserSchema.methods.createAccessToken = function () {
  return generateAccessToken(getUserInfo(this));
};

UserSchema.methods.createRefreshToken = async function (next) {
  const refreshToken = generateRefreshToken(getUserInfo(this));

  console.error("refreshToken", refreshToken);

  try {
    await new Token({ token: refreshToken }).save();
    console.log("Token saved", refreshToken);
    return refreshToken;
  } catch (error) {
    console.error(error);
    //next(new Error("Error creating token"));
  }
};

module.exports = Mongoose.model("User", UserSchema);