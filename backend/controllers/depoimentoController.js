const Comentario = require("../models/Comentario"); // Importa o modelo User
const jwt = require("jsonwebtoken");

exports.obterComentarios = async (req, res) => {

  try {
    console.log("entrei na função obterComentarios")
    const listaComentarios = await Comentario.find({ });
    console.log("obtive os comentarios")
      console.log(listaComentarios)
    res.status(200).json(listaComentarios);
  } catch (err) {
    console.error("Erro no listaComentario:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};

exports.incluirComentario = async (req, res) => {
  const { email, nome, comentario } = req.body;

  try {
    if (!email) return res.status(404).json({ msg: "Usuário não logado" });

    const novoComentario = new Comentario({ email, nome, comentario });

    await novoComentario.save();

    res.status(201).json({ msg: "Depoimento enviado com sucesso" });
  } catch (err) {
    console.error("Erro no incluirComentario:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};