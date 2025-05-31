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

    res.status(201).json({ msg: "Depoimento enviado com sucesso", _id: novoComentario._id });
  } catch (err) {
    console.error("Erro no incluirComentario:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};

// novo

exports.editarComentario = async (req, res) => {
  const { id } = req.params;
  const { comentario, email } = req.body;

  try {
    const original = await Comentario.findById(id);
    if (!original) return res.status(404).json({ msg: "Comentário não encontrado" });

    if (original.email !== email) {
      return res.status(403).json({ msg: "Você não tem permissão para editar este comentário" });
    }

    original.comentario = comentario;
    await original.save();

    res.status(200).json({ msg: "Comentário editado com sucesso" });
  } catch (err) {
    console.error("Erro ao editar comentário:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};


 exports.excluirComentario = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const comentario = await Comentario.findById(id);
    if (!comentario) return res.status(404).json({ msg: "Comentário não encontrado" });

    if (comentario.email !== email) {
      return res.status(403).json({ msg: "Você não tem permissão para excluir este comentário" });
    }

    await Comentario.findByIdAndDelete(id);
    res.status(200).json({ msg: "Comentário excluído com sucesso" });
  } catch (err) {
    console.error("Erro ao excluir comentário:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};


