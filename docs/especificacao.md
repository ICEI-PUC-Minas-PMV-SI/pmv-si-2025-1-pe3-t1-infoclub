# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta seção será apresentada a documentação de requisitos da aplicação Infoclube

## 3.1 Objetivos deste documento
O objetivo desse documento é especificar e declarar as necessidades para o desenvolvimento de um aplicativo web que fornecerá conteúdo didático sobre tecnologia, visando combater o analfabetismo digital.

Este sistema será projetado para oferecer materiais educativos acessíveis, interativos e intuitivos, auxiliando usuários com diferentes níveis de conhecimento a desenvolverem habilidades digitais essenciais. A plataforma abrangerá temas como uso básico de computadores e dispositivos móveis, navegação segura na internet, boas práticas em redes sociais, ferramentas de produtividade e conceitos fundamentais de segurança digital.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Infoclube. Ele terá os seguintes componentes: 

Módulo de cadastro usuário: permite o cadastro de usuários, incluindo dados como de identificação (nome, e-mail, telefone) e informações opcionais (data de nascimento, cidade, estado, foto de perfil, redes sociais);

Módulo de gerenciamento de conteúdo: permite que os administradores gerenciem o conteudo da aplicaçãocomo um todo, e usuários possam interagir com a aplicação;

### 3.2.2 Missão do produto
Capacitar indivíduos com pouco ou nenhum conhecimento digital por meio de um aplicativo intuitivo e acessível, oferecendo materiais didáticos interativos que promovam a inclusão digital e o desenvolvimento de habilidades essenciais para a era da informação..

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar usuário | A aplicação deve permitir que os usuários criem usuário e senha para acessar o sistema, podendo editar ou excluir as informações de acesso. A criação do usuário é opcional |
| RF2 | Gerenciar conteúdo estático |  Criação, consulta, exclusão e edição do conteúdo estático do software |
| RF3 | Gerenciar conteúo interativo |  Criação, consulta, exclusão e edição do conteúdo interativo do software |
| RF4 | Moderar feedbacks e dúvidas |  Moderação dos feedbacks e dúvidas enviados aos Administradores |
| RF5 |	Gerenciar comentários	|Incluir, visualizar, responder, excluir e editar  comentários.  |
| RF6 |	Pesquisar conteúdo	|Ferramenta de pesquisa para listagem de interesses pré-definidos com base no público-alvo.  |
| RF7 |	Controlar zoom da visualização| Controle do zoom da visualização do software a partir de uma ferramenta de lupa.|
| RF8 |	Salvar para mais tarde	| O software deve permitir o salvamento de conteúdo para leitura posterior.  |
| RF9 | Imprimir conteúdo| O software deve possuir botão de impressão para permitir que o usuário imprima as páginas em PDF ou em impressora local.|
| RF10 |Enviar feedback ou Dúvida.|A aplicação deve permitir que os usuários enviem feedback ou dúvidas aos administradores e os visualizem em seus perfis.|
| RF11 | Entrar no sistema |A aplicação deve permitir que os usuários façam login.|
| RF12 | Sair do sitema |A aplicação deve permitir que os usuários façam logout.|
| RF13 | Moderar comentários |A aplicação deve permitir que os administradores incluam, excluam e editem comentários dos usuários.|
| RF14 | Moderar usuários |A aplicação deve permitir que os administradores excluam e suspendam por tempo determinado os perfis de usuários.|



### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O software deve processar requisições do usuário em no máximo 3s.  |
| RNF2 | O software deve ser responsivo e adaptável a qualquer interface.	  |
| RNF3 |O software deve ser capaz de ser executado nas versões recentes dos navegadores mais utilizados: Chrome, Firefox, Edge e Safari.  |
| RNF4 |	Os dados pessoais dos usuários devem ser criptografados antes de serem armazenados. |	
| RNF5 |	O software deve apresentar um feedback para ações do usuário como confirmações de envio e mensagens de erro. |	
| RNF6 |	O software deve possuir um layout de fácil entendimento |	


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador |	Usuário Administrador do sistema responsável por gerenciar o conteúdo apresentado. Possui acesso geral ao sistema. |
| Usuário |	Usuário pode gerenciar comentários, enviar feedbacks e dúvidas, criar um login e gerenciar o cadastro. |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar usuário (CSU01)

Sumário: O usuário realiza a criação de um perfil na plataforma, fornecendo informações básicas de identificação.

Ator Primário: Usuário

Ator Secundário: Nenhum.

Pré-condições: O usuário deve acessar a tela de cadastro.

Fluxo Principal:

1) 	O usuário requisita a criação de um perfil no sistema. <br>
2) 	O sistema apresenta um formulário para preenchimento de dados básicos. <br>
3)  O usuário preenche os dados e confirma o cadastro. <br>
4)  O sistema valida as informações e cria o usuário. <br>
5)  O sistema exibe uma mensagem de sucesso. <br>

Fluxo Alternativo: Alterar senha

a)	O Usuário acessa a página de usuário. <br>
b)	Seleciona a opção de alterar senha. <br>
c)	Insere a senha atual e a nova senha. <br>
d)	A senha do Usuário é alterada. <br>

Fluxo Alternativo: Excluir conta

a)	O Usuário acessa a página de usuário. <br>
b)	Seleciona a opção de excluir conta. <br>
c)	Confirma a exclusão. <br>
d)	Conta do Usuário é excluída. <br>
Pós-condições: Conta do Usuário deve existir.

Fluxo Alternativo: Editar perfil
a)	O Usuário acessa a página de usuário. <br>
b)	Seleciona a opção de editar perfil. <br>
c)	Confirma as alterações. <br>
d)	Conta do Usuário é editada. <br>
Pós-condições: Conta do Usuário deve existir.

### Gerenciar conteúdo estático (CSU02)

Sumário: O administrador realiza a gestão (criação, consulta, alteração e exclusão) dos conteúdos apresentados aos usuários.

Ator Primário: Administrador

Ator Secundário: Nenhum.

Fluxo Principal: Gerenciar conteúdo estático.

1) O administrador realiza a gestão do conteúdo estático do software. <br>
2) São dadas as opções que podem ser realizadas: criação, consulta, edição e exclusão de conteúdo dentro do software. <br>
3) O Administrador seleciona a opção desejada: criação, consulta, edição e exclusão. <br>
Após concluir a operação, o sistema confirma a ação e o software é atualizado. <br>

Fluxo Alternativo: Criar conteúdo estático.

a) O Administrador realiza a inclusão de um novo conteúdo estático ao software. <br>
b) O Administrador inclui uma descrição do que foi adicionado ao software. <br>
c) O sistema valida a operação e o conteúdo é incluído. <br>

Fluxo Alternativo: Consultar conteúdo estático.

a) O Administrador realiza auma pesquisa de contéudo estático no software. <br>
b) É apresentada a lista de conteúdos com data de inclusão ao sistema.  <br>
c) O Administrador seleciona um conteúdo da lista apresentada. <br>
d) O sistema exibe os detalhes do conteúdo selecionado. <br>

Fluxo Alternativo: Editar conteúdo estático.

a) O Administrador seleciona um conteúdo estático existente para editar. <br>
b) É mostrado as informações atuais do conteúdo estático . <br>
c) O Administrador altera o conteúdo estático desejado. <br>
d) O sistema valida a operação e salva as alterações do conteúdo estático. <br>

Fluxo Alternativo: Excluir conteúdo estático.

a) O Administrador seleciona um conteúdo estático existente e realiza a sua remoção. <br>
b) O sistema valida se o conteúdo estático pode ser excluído. <br>
c) O sistema exibe uma mensagem para confirmação da exclusão. <br>
c) O conteúdo estático existente é excluído. <br>

### Gerenciar conteúdo interativo (CSU03)

Sumário: O administrador realiza a gestão (criação, consulta, alteração e exclusão) dos conteúdos interativos apresentados aos usuários.

Ator Primário: Administrador

Ator Secundário: Nenhum.

Fluxo Principal: Gerenciar conteúdo interativo.

1) O administrador realiza a gestão do conteúdo interativo do software. <br>
2) São dadas as opções que podem ser realizadas: criação, consulta, edição e exclusão de conteúdo dentro do software. <br>
3) O Administrador seleciona a opção desejada: criação, consulta, edição e exclusão. <br>
Após concluir a operação, o sistema confirma a ação e o software é atualizado. <br>

Fluxo Alternativo: Criar conteúdo interativo.

a) O Administrador realiza a inclusão de um novo conteúdo interativo ao software. <br>
b) O Administrador inclui uma descrição do que foi adicionado ao software. <br>
c) O sistema valida a operação e o conteúdo é incluído. <br>

Fluxo Alternativo: Consultar conteúdo interativo.

a) O Administrador realiza auma pesquisa de contéudo interativo no software. <br>
b) É apresentada a lista de conteúdos com data de inclusão ao sistema.  <br>
c) O Administrador seleciona um conteúdo da lista apresentada. <br>
d) O sistema exibe os detalhes do conteúdo selecionado. <br>

Fluxo Alternativo: Editar conteúdo interativo.
 
a) O Administrador seleciona um conteúdo interativo existente para editar. <br>
b) É mostrado as informações atuais do conteúdo interativo . <br>
c) O Administrador altera o conteúdo interativo desejado. <br>
d) O sistema valida a operação e salva as alterações do conteúdo interativo. <br>

Fluxo Alternativo: Excluir conteúdo interativo.

a) O Administrador seleciona um conteúdo interativo existente e realiza a sua remoção. <br>
b) O sistema valida se o conteúdo inerativo pode ser excluído. <br>
c) O sistema exibe uma mensagem para confirmação da exclusão. <br>
c) O conteúdo interativo existente é excluído. <br>

### Moderar feedbacks e dúvidas (CSU0)

Sumário: O administrador realiza a Moderação dos feedbacks e dúvidas enviados pelos usuários. 

Ator Primário: Administrador

Ator Secundário: Nenhum.

Fluxo Principal: Moderar Feedbacks e dúvidas.

1) O administrador acessa os feedbacks e dúvidas. <br>
2) São dadas as opções que podem ser realizadas: excluir, filtrar, definir prioridade. <br>
3) O Administrador seleciona a opção desejada. <br>
Após concluir a operação, o sistema confirma a ação. <br>

### Pesquisar conteúdo (CSU0)

Fluxo Principal:

1) O usuário acessa a funcionalidade de pesquisa. <br>

2) O sistema exibe um campo de busca. <br>

3) O usuário insere um termo de pesquisa. <br>

4) O sistema retorna os resultados correspondentes. <br>

5) O usuário acessa o conteúdo desejado. <br>

### Gerenciar Comentários (CSU05)
**Sumário:** O usuário realiza inclusão, exclusão e edição dos próprios comentários, bem como visualização e resposta a comentários de terceiros.
**Ator Primário:** Usuário.
**Ator Secundário:** Nenhum.
**Pré-condições:** O usuário deve ser validado/logado no sistema. 
**Fluxo Principal:** 
1.	O usuário acessa a página “Depoimentos”. 
2.	O usuário visualiza os comentários de terceiros.
3.	O Sistema apresenta as operações que podem ser realizadas: curtir comentário, denunciar comentário, responder comentário e inserir novo comentário.
4.	O usuário seleciona a operação desejada: curtir comentário, denunciar comentário, responder ao comentário, inserir novo comentário ou opta por finalizar o caso de uso.
5.	Se o usuário desejar continuar com o gerenciamento de comentários, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

**Fluxo Alternativo (1):** Curtir comentário
a.	O usuário visualiza um comentário preexistente de outro usuário.
b.	O Sistema apresenta a opção “curtir comentário”. 
c.	O usuário curte o comentário.
d.	O Sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema registra a ação. Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Fluxo Alternativo (2):** Denunciar comentário
a.	O usuário visualiza um comentário preexistente de outro usuário.
b.	O Sistema apresenta a opção “denunciar comentário”.
c.	O usuário seleciona a opção “denunciar comentário”.
d.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta a caixa de diálogo “registra o motivo da denúncia” e relaciona os motivos passíveis de denúncia e o campo de preenchimento “outros” caso o motivo da denúncia não esteja listado.
e.	O usuário seleciona a opção que motiva a denúncia e seleciona o botão “enviar”. A denúncia é enviada.
f.	 Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Fluxo Alternativo (3):** Responder comentário
a.	O usuário visualiza um comentário preexistente de outro usuário.
b.	O Sistema apresenta a opção “responder comentário”.
c.	O usuário seleciona a opção “responder comentário”.
d.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta o campo de preenchimento “Responder”.
e.	O usuário redige seu comentário e seleciona o botão “submeter comentário”.
f.	 Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Fluxo Alternativo (4):** Inserir novo comentário
a.	O usuário acessa a página “Depoimentos”.
b.	O Sistema apresenta a opção “inserir novo comentário”.
c.	O usuário seleciona a opção “inserir novo comentário”.
d.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta o campo de preenchimento “Novo comentário”.
e.	O usuário redige seu comentário e seleciona o botão “submeter comentário”.
f.	 Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Fluxo Alternativo (5):** Editar comentário
a.	O usuário visualiza o próprio comentário submetido.
b.	O Sistema apresenta a opção “editar comentário”.
c.	O usuário seleciona a opção “editar comentário”.
d.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta o campo de preenchimento “Editar” já pré-preenchido com o comentário selecionado para edição.
e.	O usuário edita seu comentário e seleciona o botão “submeter comentário editado
f.	Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Fluxo Alternativo (6): **Excluir comentário
a.	O usuário visualiza o próprio comentário submetido.
b.	O Sistema apresenta a opção “excluir comentário”.
c.	O usuário seleciona a opção “excluir comentário”.
d.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta a mensagem “Tem certeza de que deseja excluir seu comentário? (A ação não poderá ser revertida)” e os botões “Excluir” e “Não excluir”.
e.	O usuário seleciona a opção “Excluir” ou “Não excluir”.
f.	Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para interagir”.

**Pós-condições:** Um usuário curtiu, denunciou ou respondeu a um comentário de outro usuário. Um usuário inseriu novo comentário, editou ou excluiu um novo comentário que havia submetido. 

### Controlar zoom da visualização (CSU07)

**Sumário:** O usuário realiza o controle do zoom de visualização do Sistema por meio das opções “aumentar zoom” e “diminuir zoom”.
**Ator Primário:** Usuário.
**Ator Secundário:** Nenhum.
**Pré-condições:** Nenhuma.
**Fluxo Principal:**
1.	O usuário acessa o Sistema.
2.	O usuário visualiza os botões “aumentar zoom” e “diminuir zoom”.
3.	O usuário seleciona o botão “aumentar zoom”. O Sistema aumenta as letras da página atual.
4.	O usuário seleciona o botão “diminuir zoom”. O Sistema diminui as letras da página atual. 

**Pós-condições:** Um usuário aumentou o zoom de visualização da página. Um usuário diminuiu o zoom de visualização da página.

### Salvar para mais tarde (CSU08)

**Sumário:** O usuário salva um conteúdo do Sistema para leitura posterior.
**Ator Primário:** Usuário.
**Ator Secundário:** Nenhum.
**Pré-condições:** O usuário deve ser validado/logado no sistema. O conteúdo a ser salvo deve ser um conteúdo estático.
**Fluxo Principal:**
1.	O usuário acessa o Sistema.
2.	O usuário visualiza um conteúdo estático.
3.	O usuário seleciona o botão “Salvar para mais tarde”.
4.	O sistema verifica se o usuário está logado. Se o usuário estiver logado, o Sistema apresenta a mensagem “Conteúdo Salvo”.
5.	Se o usuário não estiver logado, o Sistema reporta o fato com a mensagem “Usuário não logado. Faça o login para salvar”.

**Fluxo Alternativo (1):**
a.	O usuário acessa o Sistema.
b.	O realiza login no Sistema.
c.	O usuário seleciona o botão “Conteúdos salvos”.
d.	O sistema apresenta listagem dos conteúdos salvos pelo usuário.

**Pós-condições:** Um usuário salvou um conteúdo estático para leitura posterior. Um usuário realizou o login no Sistema e acessou os conteúdos salvos anteriormente.

### Imprimir conteúdo (CSU09)

**Sumário:** O usuário imprime um conteúdo do Sistema para download em PDF ou impressão física em impressora local.
**Ator Primário: **Usuário.
**Ator Secundário:** Nenhum.
**Pré-condições:** O conteúdo a ser impresso deve ser um conteúdo estático. O usuário deve possuir uma impressora física e um conversor de PDF instalados.
**Fluxo Principal:**
1.	O usuário acessa o Sistema.
2.	O usuário visualiza um conteúdo estático.
3.	O usuário seleciona o botão “Imprimir”.
4.	O sistema exibe as opções “Salvar em PDF” e “Impressão física”.
5.	O usuário seleciona a opção desejada. Se o usuário não possuir uma impressora física ou um conversor de PDF instalados em seu dispositivo, o Sistema retorna a mensagem “Impressora não localizada. Certifique-se de que possui um conversor de PDF ou uma impressora instalada em seu dispositivo”. Se o usuário possuir o conversor e/ou a impressora local instalada, o Sistema executa a ação.

**Pós-condições:** Um usuário salvou um conteúdo estático em formato PDF no seu dispositivo local. Um usuário realizou a impressão física em uma impressora local.

### Enviar feedback ou dúvida (CSU10)

**Sumário:** O usuário realiza o envio de um feedback sobre a página ou uma dúvida pessoal.
**Ator Primário:** Usuário; Administradores.
**Ator Secundário:** Nenhum.
**Pré-condições:** Preenchimento de campos obrigatórios.
**Fluxo Principal:**
1.	O usuário acessa a página “Ajuda”.
2.	O usuário visualiza o campo “Precisa de Ajuda?”.
3.	O preenche os campos nome, telefone, e-mail, estado, idade e descreva sua dúvida.
4.	O usuário seleciona o botão “enviar”.
5.	Se o usuário tiver preenchido todos os campos obrigatórios, o Sistema retorna a mensagem “Enviado! Aguarde o nosso contato”. Se o usuário não tiver preenchido todos os campos obrigatórios, o Sistema retornará a mensagem “Preencha este campo”, que aparecerá junto ao campo a ser preenchido. 

**Fluxo Alternativo (1):** Tratamento das dúvidas e feedbacks enviados
a.	Os administradores do Sistema acessam o e-mail registrado para recebimentos de dúvidas e feedbacks.
b.	Os administradores analisam as dúvidas e feedbacks encaminhados. 
c.	Caso se trate de uma dúvida, o administrador responsável pela análise encaminhará resposta à dúvida para os meios de contato informados pelo usuário. Caso se trate de um feedback, o administrador responsável pela análise encaminhará a confirmação de recebimento do feedback, para os contatos informados pelo usuário, e registrará o feedback em documentação própria para futura e eventual implementação. 

**Pós-condições:** Um usuário encaminhou uma dúvida ou um feedback. Os administradores receberam uma dúvida ou um feedback de um usuário. Um administrador respondeu à dúvida ou feedback de um usuário.


### Entrar no sistema / Sair do sistema (CSU11)

**Sumário:** O usuário realiza o login e o logout no sistema. 
**Ator Primário:** Usuário.
**Ator Secundário:** Nenhum.
**Pré-condições:** Possuir perfil pré-cadastrado no sistema. Preenchimento de campos obrigatórios.
**Fluxo Principal:**
1.	O usuário acessa o sistema.
2.	O usuário seleciona o botão “Entrar”.
3.	O sistema apresenta os campos usuário e senha e os botões entrar e esqueci meu usuário/senha. O usuário preenche os campos usuário e senha. Após, o usuário seleciona o botão “entrar”. 
4.	O Sistema valida os dados informados. Se o usuário não possuir perfil pré-cadastrado, o sistema retorna a mensagem “Usuário não cadastrado. Deseja criar um perfil?” e apresenta os botões “Criar perfil” e “Continuar sem login”. Se o usuário optar por criar novo perfil, o Sistema redireciona ao caso de uso CSU01. Se o usuário optar por continuar sem login, o Sistema retorna ao item 1. Se o usuário possuir perfil pré-cadastrado mas tiver informado uma das credenciais de acesso incorretamente, o sistema retorna a mensagem “Usuário ou senha errados. Tente novamente”. Se o usuário possuir perfil pré-cadastrado e tiver informado as credenciais de acesso corretamente, o sistema autoriza o login. 

**Fluxo Alternativo (1):** Esqueci meu usuário/senha
a.	O usuário acessa o Sistema. 
b.	O usuário seleciona o botão “Entrar”. 
c.	O sistema apresenta os campos usuário e senha e os botões entrar e esqueci meu usuário/senha. 
d.	O usuário seleciona a opção esqueci meu usuário/senha. 
e.	O sistema retorna a mensagem “Informe o telefone cadastrado”, o campo para preenchimento e o botão enviar. 
f.	O usuário informa o celular cadastrado e seleciona o botão enviar. O sistema valida o celular informado. Se o celular informado corresponder ao que foi informado, o usuário receberá um SMS com as informações de suas credenciais de acesso (usuário e senha). Se o celular informado não corresponder ao que foi informado pelo usuário, o sistema retorna a mensagem “Telefone/celular não encontrado. Tente novamente” 

**Fluxo Alternativo (2):** Sair do Sistema
a.	O usuário acessa o Sistema. 
b.	O usuário realiza o login no sistema conforme fluxos anteriores. 
c.	O usuário seleciona o botão “Sair do Sistema”. 
d.	O sistema realiza o logout do usuário e retorna a mensagem “Você fez o Logout”.  

**Pós-condições: **Um usuário realizou o login no sistema. Um usuário informou que esqueceu seu usuário/senha. Um usuário recebeu uma mensagem com as informações de suas credenciais de acesso. Um usuário realizou o logout no sistema.


### Moderar comentários e Moderar usuários (CSU12)

**Sumário:** O administrador realiza a moderação de comentários e de usuários.
**Ator Primário: **Administradores.
**Ator Secundário:** Usuário.
**Pré-condições: **Autenticar no sistema.
**Fluxo Principal:**
1.	O administrador acessa o Sistema.
2.	O administrador clica no botão “Entrar”.
3.	O Sistema apresenta os campos usuário e senha e os botões entrar e esqueci meu usuário/senha. O administrador preenche os campos usuário e senha incorretamente e clica no botão entrar. O sistema retorna a mensagem “Usuário/senha incorreto. Tente novamente”. O administrador clica no botão “esqueci meu usuário/senha”. O sistema retorna a mensagem “informe o e-mail cadastrado”. O usuário informa o e-mail cadastrado e clica no botão enviar. O sistema valida o e-mail cadastrado. Se o e-mail não corresponder ao que foi informado pelo administrador no cadastro, o sistema retorna a mensagem “E-mail não encontrado. Tente novamente”. Se o e-mail informado estiver correto, o sistema encaminha para o e-mail do administrador um link para alteração de senha. O administrador altera sua senha e o sistema autoriza seu acesso. 
4.	O usuário acessa o sistema com acesso privilegiado de administrador. 

**Fluxo Alternativo (1):** Moderação de comentários
a.	O administrador acessa a página “Depoimentos”. 
b.	O sistema apresenta os comentários submetidos pelos usuários com o botão “moderar”. 
c.	O administrador analisa os comentários submetidos e seleciona o botão “moderar”. 
d.	O sistema exibe campo pré-preenchido com o comentário a ser moderado e os botões “alterar”, “excluir” e “confirmar”.
e.	Se o administrador seleciona o botão “alterar”, o sistema torna o campo do comentário editável, o administrador apaga as palavras consideradas ofensivas e clica em “confirmar”. O sistema retorna a mensagem “Motivo da alteração” e lista os motivos que devem ser obrigatoriamente informados pelo administrador (dados pessoais do usuário/terceiros, palavras impróprias, palavras ofensivas, link para acesso externo não autorizado). O administrador seleciona o motivo e clica no botão “confirmar”. O sistema retorna a mensagem “Alteração registrada” registra internamente a identidade do moderador do comentário, a alteração feita, o motivo da alteração e a versão original, a data e a hora da moderação, e passa a apresentar o comentário do usuário com o motivo da exclusão da palavra no lugar da palavra originalmente utilizada pelo usuário.
f.	Se o administrador seleciona o botão “excluir”, o sistema retorna a mensagem “Motivo da exclusão” e lista os motivos que devem ser obrigatoriamente informados pelo administrador (spam, descrição de nudez ou atividade sexual, conduta ou símbolos de ódio, violência ou organizações perigosas, informação falsa, bullying ou assédio, golpe ou fraude). O administrador seleciona a o motivo e clica no botão “confirmar”. O sistema retorna a mensagem “Exclusão registrada” e registra internamente a identidade do moderador do comentário, o motivo da exclusão, o comentário excluído, a data e a hora da moderação, e passa a apresentar a mensagem “Comentário excluído pela moderação” no lugar do comentário original do usuário.

**Fluxo Alternativo (2):** Moderação de usuários
a.	O administrador acessa a página “Listagem de Usuários”. 
b.	O sistema apresenta listagem com todos os usuários cadastrados no sistema e o botão “Mais ações”. 
c.	O administrador escolhe um usuário da lista e seleciona o botão “mais ações”. 
d.	O sistema exibe os dados cadastrais do usuário selecionado e os botões, o registro de atividades do usuário no sistema e os botões “bloquear usuário”. 
e.	O sistema exibe a mensagem “indique o motivo para o bloqueio” e a listagem de motivos para bloqueio do perfil do usuário: envio reiterado de spam, comportamento inadequado reiteradamente (descrição de nudez ou atividade sexual; conduta ou símbolos de ódio; violência ou organizações perigosas; informação falsa; bullying ou assédio; golpe ou fraude), o usuário está se passando por terceiros, perfil falso, usuário inativo por mais de 365 dias; o campo “observações” e o botão “confirmar bloqueio”.
f.	O administrador seleciona uma das opções da lista de motivos, preenche facultativamente o campo “observações” e seleciona o botão “confirmar bloqueio”. 
g.	O sistema retorna a mensagem “usuário bloqueado”, registra internamente a identidade do administrador responsável pelo bloqueio, o motivo do bloqueio, a data e a hora do bloqueio, e passa a apresentar a mensagem usuário bloqueado no cadastro interno do usuário e o botão “desbloquear usuário”. O sistema encaminha e-mail para o usuário informando sobre o bloqueio do perfil, o motivo do bloqueio e concedendo a opção do usuário responder ao e-mail para recorrer administrativamente do bloqueio. 
h.	O sistema passa a apresentar a mensagem “usuário bloqueado” quando o usuário tenta realizar login no sistema e nos comentários feitos pelo usuário, no lugar de sua identificação. 
i.	Se o recurso ao bloqueio do usuário foi considerado pertinente pelos administradores, o fluxo retorna ao item “a”, e o administrador poderá acessar o cadastro do usuário bloqueado, clicar no botão “desbloquear usuário”, e o sistema retornará a mensagem “Informe o motivo do desbloqueio” com o campo para preenchimento manual obrigatório pelo administrador e o botão “confirmar desbloqueio”. 
j.	O sistema retira as informações de bloqueio do usuário e retorna a exibição das informações de cadastro do usuário nos comentários feitos por este.

**Pós-condições:** Um administrador altera ou exclui o comentário de um usuário. Um administrador bloqueia um usuário. Um administrador desbloqueia um usuário.|


### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
