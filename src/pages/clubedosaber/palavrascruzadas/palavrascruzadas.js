const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        processarInput(namebtn);
    });
});

function processarInput(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}


function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "TELA" && tipe == "d1") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "EMAIL" && tipe == "m1") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "VIRUS" && tipe == "d2") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "INTERNET" && tipe == "d3") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "REDE" && tipe == "m2") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "ENTER" && tipe == "m3") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "VIRTUAL" && tipe == "d4") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "JANELA" && tipe == "m4") {
        atualizarEstiloTabela(tabel)
    } else if (concat.toUpperCase() == "CONEXAO" && tipe == "d5") {
        atualizarEstiloTabela(tabel);
    } else if (concat.toUpperCase() == "ROTEADOR" && tipe == "d6") {
        atualizarEstiloTabela(tabel);
    } 
}

function atualizarEstiloTabelaCorreta(tabel) {
    for (let j = 0; j < tabel.length; j++) {
        tabel[j].classList.add('correta');
        tabel[j].classList.remove('errada');
        tabel[j].style.backgroundColor = 'lightgreen'; // Define o fundo como verde claro
        tabel[j].setAttribute('enable', false);
    }
}

function atualizarEstiloTabelaIncorreta(tabel) {
    for (let j = 0; j < tabel.length; j++) {
        tabel[j].classList.add('errada');
        tabel[j].classList.remove('correta');
        tabel[j].setAttribute('enable', false);
    }
}




function submitString(concat, tipe, tabel) {
    const respostasCorretas = {
        d1: "TELA",
        d2: "VIRUS", 
        d3: "INTERNET", 
        d4: "VIRTUAL", 
        d5: "CONEXAO", 
        d6: "ROTEADOR", 
        m1: "EMAIL", 
        m2: "REDE", 
        m3: "ENTER", 
        m4: "JANELA", 

    };

    if (concat.toUpperCase() === respostasCorretas[tipe]) {
        atualizarEstiloTabela(tabel, true);
    } else {
        atualizarEstiloTabela(tabel, false);
        }
    }

function atualizarEstiloTabela(tabel, correta) {
    for (let j = 0; j < tabel.length; j++) {
        if (correta) {
            tabel[j].classList.add('correta');
            tabel[j].classList.remove('errada');

        } else {
            tabel[j].classList.add('errada');
            tabel[j].classList.remove('correta');
        }
        tabel[j].setAttribute('enable', false);
    }
}

const botoes = document.querySelectorAll('.botoes2 button');

botoes[0].addEventListener('click', function() {

    const camposInput = document.querySelectorAll('td input');

    camposInput.forEach(function(input) {

        if (input.classList.contains('errada')) {
            input.value = '';
            input.classList.remove('errada');
            input.classList.remove('correta');

            input.removeAttribute('disabled');
        }
    });
});


// BOTÃO SOLUÇÃO 

const btnSolucao = document.querySelector('.solucao');

btnSolucao.addEventListener('click', function () {
    const respostasCorretas = {
        d1: "TELA",
        d2: "VIRUS",
        d3: "INTERNET",
        d4: "VIRTUAL",
        d5: "CONEXAO",
        d6: "ROTEADOR",
        m1: "EMAIL",
        m2: "REDE",
        m3: "ENTER",
        m4: "JANELA"
    };

    for (const [key, value] of Object.entries(respostasCorretas)) {
        const camposInput = document.querySelectorAll('.' + key);
        
        
        for (let i = 0; i < camposInput.length; i++) {
            const input = camposInput[i];
            if (!input.classList.contains('correta')) {
                input.classList.add('correta');
                input.value = value[i];
            }
        }
    }
});

// REMOVE SOLUÇÕES 
const btnApagar = document.querySelector('.apagar');

btnApagar.addEventListener('click', function () {
    const camposInput = document.querySelectorAll('td input');

    camposInput.forEach(function(input) {
        input.value = '';
        input.classList.remove('errada');
        input.classList.remove('correta');
        input.removeAttribute('disabled');
        input.style.backgroundColor = ''; // Remove o estilo de fundo
    });

    const inputsSolucao = document.querySelectorAll('.solucao');
    inputsSolucao.forEach(function(input) {
        input.classList.remove('errada');
        input.classList.remove('correta');
    });
});



// Função para abrir o pop-up
function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

const btnAbrirPopup = document.querySelector('.solucao');
btnAbrirPopup.addEventListener('click', abrirPopup);