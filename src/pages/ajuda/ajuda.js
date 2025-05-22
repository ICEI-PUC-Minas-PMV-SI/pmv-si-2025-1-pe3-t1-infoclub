const popupdep = document.querySelector("#pop");
const overlay = document.querySelector(".overlay");

function openP() {
    popupdep.classList.add("open");
}

function mostrarDepoimento() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const estado = document.getElementById('estado').value;
    const idade = document.getElementById('idade').value;
    const duvida = document.getElementById('duvida').value;
    
    

    const novaDuvida = {
        nome: nome,
        telefone: telefone,
        email: email,
        estado: estado,
        idade: idade,
        duvida: duvida
    };

    let duvidas = JSON.parse(localStorage.getItem('duvidas')) || [];
    duvidas.push(novaDuvida);
    localStorage.setItem('duvidas', JSON.stringify(duvidas));

    exibirDuvidas();
    document.getElementById('helpForm').reset();
    
    
    openP();
}

window.onload = function() {
    exibirDuvidas();
};

function exibirDuvidas() {
    const depoimentoDiv = document.getElementById('depoimentos');
    depoimentoDiv.innerHTML = '';

    const duvidas = JSON.parse(localStorage.getItem('duvidas')) || [];

    duvidas.forEach(duvida => {
        const novoDepoimento = document.createElement('div');
        novoDepoimento.classList.add('depoimento');

        novoDepoimento.innerHTML = `
            <h3>Dúvida de ${duvida.nome}</h3>
            <p><strong>Telefone:</strong> ${duvida.telefone}</p>
            <p><strong>E-mail:</strong> ${duvida.email}</p>
            <p><strong>Estado:</strong> ${duvida.estado}</p>
            <p><strong>Idade:</strong> ${duvida.idade}</p>
            <p><strong>Dúvida:</strong> ${duvida.duvida}</p>
            <hr>
        `;

        depoimentoDiv.appendChild(novoDepoimento);
    });
}
