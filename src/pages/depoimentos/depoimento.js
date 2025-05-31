
let usuario = null;

function render(data) {
  const html = `
    <div class='comentBox' data-id='${data._id}' data-email='${data.email}'> 
      <div class='leftPanelImg'>
        <img src='../../assets/icons/usuario-de-perfil.png'>
      </div>
      <div class='rightPanel'>
        <h1>${data.nome}</h1>
        <p>${data.comentario}</p>
        ${
          usuario && usuario.email === data.email
            ? `<button class="btn btn-sm btn-warning editar">Editar</button>
               <button class="btn btn-sm btn-danger excluir">Excluir</button>`
            : ""
        }
      </div>
      <div class='clear'></div>
    </div>`;

  $("#containercomment").append(html);
      } // tudo  depois de data.cometario


$(document).ready(async function () {

  if (localStorage.usuarioLogado) {
    usuario = JSON.parse(localStorage.usuarioLogado);
    $("#name").val(usuario.nome);
  } else {
    $("#formDepoimentos").hide();
    const modalLogin = new bootstrap.Modal($("#modalLogin"));
    modalLogin.show();
  }

  // Carrega os comentários existentes
  try {
    const response = await fetch("http://localhost:5001/api/comentario/obterComentarios", {
      method: "GET",
    });
    const comentarios = await response.json();
    comentarios.forEach(render);
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
  }

  // Envia novo comentário
  $("#testForm").on("submit", async function (e) {
    e.preventDefault();

    const nomeInput = $("#name").val().trim();
    const texto = $("#bodyText").val().trim();
    const anonimo = $("#agreeTerms").is(":checked");

    if (!texto) {
      alert("Por favor, insira um depoimento antes de enviar.");
      return;
    }

    const nome = anonimo || nomeInput === "" ? "Anônimo" : nomeInput;
    const email = usuario ? usuario.email : "";

    try {
      const response = await fetch("http://localhost:5001/api/comentario/incluirComentario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nome, comentario: texto }),
      });

      const result = await response.json();

      // A API precisa retornar o _id do comentário salvo!
      const novoComentario = { _id: result._id, nome, comentario: texto };
      render(novoComentario);

      $("#testForm")[0].reset();
      openP();
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  });


  // Excluir comentário
  $(document).on("click", ".excluir", async function () {
    const box = $(this).closest(".comentBox");
    const id = box.data("id");

    if (!id) return;

    if (confirm("Tem certeza que deseja excluir este comentário?")) {
      try {
        const response = await fetch(`http://localhost:5001/api/comentario/excluirComentario/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: usuario.email }),
        });

        const result = await response.json();
        console.log(result.msg);
        box.remove();
      } catch (error) {
        console.error("Erro ao excluir comentário:", error);
      }
    }
  });

  // Editar comentário
  $(document).on("click", ".editar", async function () {
    const box = $(this).closest(".comentBox");
    const id = box.data("id");

    if (!id) return;

    const p = box.find("p");
    const textoAtual = p.text();
    const novoTexto = prompt("Edite seu depoimento:", textoAtual);

    if (novoTexto && novoTexto.trim() !== "" && novoTexto !== textoAtual) {
      try {
        const response = await fetch(`http://localhost:5001/api/comentario/editarComentario/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comentario: novoTexto, email: usuario.email }),
        });

        const result = await response.json();
        console.log(result.msg);
        p.text(novoTexto);
      } catch (error) {
        console.error("Erro ao editar comentário:", error);
      }
    }
  });
});

// POPUP

const popupdep = document.querySelector("#pop");
const overlay = document.querySelector(".overlay");

function openP() {
  popupdep.classList.add("open");
  overlay.classList.add("open");
  overlay.style.display = "block";
}

function closeP() {
  popupdep.classList.remove("open");
  overlay.classList.remove("open");
  overlay.style.display = "none";
}

