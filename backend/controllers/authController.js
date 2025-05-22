const User = require('../models/User'); // Importa o modelo User
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ msg: "Email já cadastrado" });

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = new User({ nome, email, senha: senhaHash });

    await novoUsuario.save();

    res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (err) {
    console.error("Erro no register:", err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });

console.log("📥 Email recebido:", email);
console.log("📥 Senha digitada:", senha);
console.log("🔐 Hash no banco:", usuario.senha);

const senhaValida = await bcrypt.compare(senha, usuario.senha);
console.log("✅ A senha é válida?", senhaValida);

if (!senhaValida) {
  console.log("❌ Senha incorreta!");
  return res.status(401).json({ msg: "Senha incorreta" });
}

    // Gera token JWT com tempo de expiração
    const token = jwt.sign(
      { id: usuario._id, tipo: usuario.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Retorna o token e os dados do usuário (sem a senha)
    res.json({
      token,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo
      }
    });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ msg: "Erro no login" });
  }
};

exports.recuperarSenha = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Informe o email para recuperação.' });
  }

  try {
    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ msg: 'Email não encontrado.' });
    }

    // Aqui você pode implementar a lógica para enviar o email com a recuperação da senha
    // Por enquanto, vamos só retornar uma mensagem para teste
    res.json({ msg: "Enviamos as instruções de recuperação para o seu e-mail!" });


  } catch (err) {
    console.error('Erro na recuperação de senha:', err);
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};