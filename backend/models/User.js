const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
  tipo: { type: String, default: "comum" }
});

module.exports = mongoose.model("User", UserSchema);