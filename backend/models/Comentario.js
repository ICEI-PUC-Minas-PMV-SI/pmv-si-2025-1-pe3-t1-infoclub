const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema({
  email: { type: String }, //pesquisar como faser esse email ser uma foregn key do user que fez o coment
  nome: { type: String },
  comentario: { type: String },
  data: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comentario", ComentarioSchema);
