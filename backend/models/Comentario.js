const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema({
  email: { type: String, required: true }, // required:true
  nome: { type: String },
  comentario: { type: String },
  data: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comentario", ComentarioSchema);
