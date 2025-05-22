// FORM
function render(data){
  var html = "<div class='comentBox'><div class='leftPanelImg'><img src='../../assets/icons/usuario-de-perfil.png'></div><h1>"+data.name+"</h1><p>"+data.body+"</p></div><div class='clear'></div></div>"
  $('#containercomment').append(html);
}
$(document).ready(function(){

  var coment = [];

  if(!localStorage.comentData){
    localStorage.comentData = [];
  }
  else{
    coment = JSON.parse(localStorage.comentData);
  }
  
  for (var i = 0; i < coment.length; i++){
    render(coment[i]);
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
        render(addObj);
        $('#name').val('');
        $('#bodyText').val('');
        $('#agreeTerms').prop('checked', false);
        
        openP(); 
      } else {
        alert('Por favor, escolha entre fornecer o seu nome ou selecionar Anônimo.'); // Exibe uma mensagem de alerta
      }
    } else {
        alert('Por favor, insira um depoimento antes de enviar.'); // Exibe uma mensagem de alerta
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


