// FORM

function render(data, index){
  var html = `
    <div class='comentBox' data-index="${index}">
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

$(document).ready(function(){
  var coment = [];

  if(localStorage.comentData){
    coment = JSON.parse(localStorage.comentData);
  }

  
  for (var i = 0; i < coment.length; i++){
    render(coment[i], i);
  }


  $('#addComent').click(function(e){
    e.preventDefault();

    if ($('#bodyText').val().trim() !== '') {
      if (($('#name').val().trim() !== '') || ($('#agreeTerms').prop('checked'))) {
        var name = $('#agreeTerms').prop('checked') ? "Anônimo" : $('#name').val();
        var addObj = {
          "name": name,
          "body": $('#bodyText').val()
        };

        coment.push(addObj);
        localStorage.comentData = JSON.stringify(coment);
        $('#containercomment').empty(); 
        for (var i = 0; i < coment.length; i++){
          render(coment[i], i);
        }

        $('#name').val('');
        $('#bodyText').val('');
        $('#agreeTerms').prop('checked', false);
        openP();
      } else {
        alert('Por favor, escolha entre fornecer o seu nome ou selecionar Anônimo.');
      }
    } else {
      alert('Por favor, insira um depoimento antes de enviar.');
    }
  });

  
  $('#containercomment').on('click', '.deleteBtn', function(){
    var index = $(this).closest('.comentBox').data('index');
    coment.splice(index, 1);
    localStorage.comentData = JSON.stringify(coment);
    $('#containercomment').empty();
    for (var i = 0; i < coment.length; i++){
      render(coment[i], i);
    }
  });
});

// POPUP

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


