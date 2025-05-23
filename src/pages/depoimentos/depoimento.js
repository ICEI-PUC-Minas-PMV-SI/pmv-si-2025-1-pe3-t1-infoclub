// Função para renderizar cada depoimento na tela
function render(data){
  var html = `
    <div class='comentBox' data-id="${data._id}">
      <div class='leftPanelImg'>
        <img src='../../assets/icons/usuario-de-perfil.png'>
      </div>
      <div class='rightPanel'>
        <h1>${data.name}</h1>
        <p>${data.body}</p>
        <button class="btn btn-danger btn-sm deleteBtn">Excluir</button>
      </div>
      <div class='clear'></div>
    </div>
  `;
  $('#containercomment').append(html);
}

// Função para carregar todos depoimentos do backend
async function carregarDepoimentos(){
  try {
    const response = await fetch('http://localhost:5001/api/depoimentos');
    if (!response.ok) throw new Error('Erro ao buscar depoimentos');
    const depoimentos = await response.json();

    $('#containercomment').empty();
    depoimentos.forEach(render);
  } catch (error) {
    alert(error.message);
  }
}

$(document).ready(function(){

  // Carrega depoimentos ao abrir a página
  carregarDepoimentos();

  // Evento para adicionar depoimento
  $('#addComent').click(async function(e){
    e.preventDefault();

    const bodyText = $('#bodyText').val().trim();
    const nomeInput = $('#name').val().trim();
    const anonimo = $('#agreeTerms').prop('checked');

    if(bodyText === '') {
      alert('Por favor, insira um depoimento antes de enviar.');
      return;
    }

    if(nomeInput === '' && !anonimo){
      alert('Por favor, escolha entre fornecer o seu nome ou selecionar Anônimo.');
      return;
    }

    const name = anonimo ? "Anônimo" : nomeInput;

    try {
      const response = await fetch('http://localhost:5001/api/depoimentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, body: bodyText })
      });

      if(!response.ok) throw new Error('Erro ao salvar depoimento');

      await carregarDepoimentos();

      // Limpa os campos do formulário
      $('#name').val('');
      $('#bodyText').val('');
      $('#agreeTerms').prop('checked', false);

      openP();
    } catch (error) {
      alert(error.message);
    }
  });

  // Evento para deletar depoimento
  $('#containercomment').on('click', '.deleteBtn', async function(){
    const id = $(this).closest('.comentBox').data('id');

    try {
      const response = await fetch(`http://localhost:5001/api/depoimentos/${id}`, {
        method: 'DELETE'
      });

      if(!response.ok) throw new Error('Erro ao excluir depoimento');

      await carregarDepoimentos();
    } catch (error) {
      alert(error.message);
    }
  });
});

// Popup (sem alterações)
const popupdep = document.querySelector('#pop');
const overlay = document.querySelector('.overlay');

function openP() {
    popupdep.classList.add('open');
    overlay.classList.add('open');
    overlay.style.display = 'block';
}

function closeP() {
    popupdep.classList.remove('open');
    overlay.classList.remove('open');
    overlay.style.display = 'none';
}


