// FORM
function render(data) {
  console.log(data);
  var html =
    "<div class='comentBox'><div class='leftPanelImg'><img src='../../assets/icons/usuario-de-perfil.png'></div><h1>" +
    data.nome +
    "</h1><p>" +
    data.comentario +
    "</p></div><div class='clear'></div></div>";
  $("#containercomment").append(html);
}

function fecharModal() {
  var modalLogin = bootstrap.Modal.getInstance($("#modalLogin"));
  modalLogin.hide();
}

$(document).ready(async function () {
  console.log(localStorage.usuarioLogado);
  if (localStorage.usuarioLogado) {
    var usuario = JSON.parse(localStorage.usuarioLogado);
    console.log(usuario.nome);
    $("#name").val(usuario.nome);
  } else {
   $("#formDepoimentos").hide()
    var modalLogin = new bootstrap.Modal($("#modalLogin"));
    modalLogin.show();
  }
  var resultado = [];
  console.log("buscando comentarios");
  const response = await fetch(
    "http://localhost:5001/api/comentario/obterComentarios",
    {
      method: "GET",
    }
  );

  resultado = await response.json();
  console.log(resultado);
  for (var i = 0; i < resultado.length; i++) {
    render(resultado[i]);
  }

  $("#addComent").click(async function (e) {
    console.log("Click");
    e.preventDefault();

    if ($("#bodyText").val().trim() !== "") {
      if ($("#name").val().trim() !== "" || $("#agreeTerms").prop("checked")) {
        var nome = $("#agreeTerms").prop("checked")
          ? "Anônimo"
          : $("#name").val();
        var email = usuario.email;
        var comentario = $("#bodyText").val().trim();

        const response = await fetch(
          "http://localhost:5001/api/comentario/incluirComentario",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, nome, comentario }),
          }
        );

        const resultado = await response.json();
        render({ nome, comentario });
        $("#name").val("");
        $("#bodyText").val("");
        $("#agreeTerms").prop("checked", false);

        openP();
      } else {
        alert(
          "Por favor, escolha entre fornecer o seu nome ou selecionar Anônimo."
        ); // Exibe uma mensagem de alerta
      }
    } else {
      alert("Por favor, insira um depoimento antes de enviar."); // Exibe uma mensagem de alerta
    }
  });
});

//  whatever
document.getElementById("testForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const isAnonymous = document.getElementById("agreeTerms").checked;
    const body = document.getElementById("bodyText").value.trim();

    if (body === "") return;

    const container = document.getElementById("containercomment");

    const commentBox = document.createElement("div");
    commentBox.className = "comentBox";

    const leftPanel = document.createElement("div");
    leftPanel.className = "leftPanelImg";
    leftPanel.innerHTML = `<img src='../../assets/icons/usuario-de-perfil.png'>`;

    const rightPanel = document.createElement("div");
    rightPanel.className = "rightPanel";

    const commenterName = isAnonymous ? "Anônimo" : name || "Usuário";
    rightPanel.innerHTML = `
        <h1>${commenterName}</h1>
        <p class="commentText">${body}</p>
        <button class="btn btn-light btn-sm editBtn">Editar</button>
        <button class="btn btn-danger btn-sm deleteBtn">Excluir</button>
    `;

    commentBox.appendChild(leftPanel);
    commentBox.appendChild(rightPanel);
    container.appendChild(commentBox);

    // Limpar campos
    document.getElementById("testForm").reset();

    // Mostrar popup
    openP();

    // Editar
    rightPanel.querySelector(".editBtn").addEventListener("click", function () {
        const currentText = rightPanel.querySelector(".commentText").textContent;
        const newText = prompt("Edite seu depoimento:", currentText);
        if (newText !== null && newText.trim() !== "") {
            rightPanel.querySelector(".commentText").textContent = newText;
        }
    });

    // Excluir
    rightPanel.querySelector(".deleteBtn").addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir este depoimento?")) {
            container.removeChild(commentBox);
        }
    });
});

// Funções do popup
function openP() {
    document.getElementById("pop").classList.add("open");
    document.querySelector(".overlay").classList.add("open");
}

function closeP() {
    document.getElementById("pop").classList.remove("open");
    document.querySelector(".overlay").classList.remove("open");
}
