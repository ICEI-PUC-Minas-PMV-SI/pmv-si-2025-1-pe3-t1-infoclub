const bcrypt = require('bcryptjs');

const admins = [
  { nome: "Daniel", email: "daniel@admninfoclube.com", senha: "daniel123" },
  { nome: "Amanda", email: "amanda@admninfoclube.com", senha: "amanda123" },
  { nome: "Luis", email: "luis@admninfoclube.com", senha: "luis123" },
  { nome: "João", email: "joao@admninfoclube.com", senha: "joao123" },
  { nome: "Jennifer", email: "jennifer@admninfoclube.com", senha: "jennifer123" },
  { nome: "Ester", email: "ester@admninfoclube.com", senha: "ester123" },
];

async function gerarHashes() {
  for (const admin of admins) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(admin.senha, salt);
    console.log(`{
  "nome": "${admin.nome}",
  "email": "${admin.email}",
  "senha": "${hash}",
  "tipo": "admin"
},`);
  }
}

gerarHashes();