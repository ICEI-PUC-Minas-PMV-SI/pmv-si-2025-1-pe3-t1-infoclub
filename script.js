
document.addEventListener("DOMContentLoaded", atualizarInterface);

// Abrir/Fechar Modais
function abrirLogin() {
  document.getElementById("modalLogin").style.display = "flex";
  fecharOutros("modalLogin");
}
function abrirCadastro() {
  document.getElementById("modalCadastro").style.display = "flex";
  fecharOutros("modalCadastro");
}
function abrirRecuperacao() {
  document.getElementById("modalRecuperacao").style.display = "flex";
  fecharOutros("modalRecuperacao");
}
function fecharOutros(excecaoId = null) {
  const janelas = document.querySelectorAll(".janela");

  janelas.forEach((elemento) => {
    if (elemento.id !== excecaoId) {
      elemento.style.display = "none";
    }
  });
}

function fecharModal() {
  fecharOutros(null);
}



// Login
async function fazerLogin() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const resultado = await response.json();

    if (!response.ok) {
      alert(resultado.msg || "Erro ao fazer login");
      return;
    }

    // Login bem-sucedido
    const usuario = resultado.usuario;
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    if (usuario.tipo === "admin") {
      alert(`Bem-vindo(a), ADMIN ${usuario.nome}!`);
      window.location.href = "admin.html"; // Página exclusiva para administradores
    } else {
      alert(`Bem-vindo(a), ${usuario.nome}!`);
      fecharModal();
      atualizarInterface();
    }

  } catch (erro) {
    console.error("Erro no login:", erro);
    alert("Erro na comunicação com o servidor.");
  }
}


// Recuperar senha
async function enviarRecuperacao() {
  const email = document.getElementById("recuperacaoEmail").value;

  if (!email) {
    alert("Informe o email para recuperação!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5001/api/auth/recuperar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const resultado = await response.json();

    if (!response.ok) {
      alert(resultado.msg || "Erro ao tentar recuperar a senha");
      return;
    }

    alert(resultado.msg || "Instruções enviadas para o email.");
    fecharModal();
  } catch (erro) {
    console.error("Erro na recuperação de senha:", erro);
    alert("Erro na comunicação com o servidor.");
  }
}

// Logout
function logout() {
  localStorage.removeItem("logado");
  localStorage.removeItem("usuarioLogado");

  alert("Você saiu do sistema.");
  location.reload(); // Recarrega a página inicial
}

function atualizarInterface() {
  const logado = localStorage.getItem("logado") === "true";
  const btnEntrar = document.getElementById("btnEntrar");
  const btnSair = document.getElementById("btnSair");

  if (btnEntrar && btnSair) {
    if (logado) {
      btnEntrar.classList.add("d-none");
      btnSair.classList.remove("d-none");
    } else {
      btnEntrar.classList.remove("d-none");
      btnSair.classList.add("d-none");
    }
  }
}

async function criarConta() {
  const nome = document.getElementById("cadastroNome").value;
  const email = document.getElementById("cadastroEmail").value;
  const senha = document.getElementById("cadastroSenha").value;

  if (nome && email && senha) {
    const usuario = { nome, email, senha };

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.msg || "Erro ao salvar no banco de dados");
        return;
      }

      // Salva localmente também (opcional, para lembrar quem está logado)
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      localStorage.setItem("logado", "true");

      alert("Cadastro realizado com sucesso!");
      fecharModal();
      atualizarInterface();

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar usuário.");
    }

  } else {
    alert("Preencha todos os campos.");
  }
}

window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

function verificarAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token não fornecido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.tipo !== "admin") {
      return res.status(403).json({ msg: "Acesso negado" });
    }
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
}