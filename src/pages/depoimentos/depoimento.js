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
