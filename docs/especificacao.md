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
| RF1 | Criar usuário | A aplicação deve permitir que os usuários criem usuário e senha para acessar o sistema, podendo editar ou excluir as informações de acesso. A criação do usuário é opcional |
| RF2 | Gerenciar conteudo estático |  Inclusão, exclução e edição do conteúdo informativo do software |
| RF3 | Gerenciar conteudo interativo |  Inclusão, exclução e edição do conteúdo interativo do software |
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

#### Criar usuário (CSU01)

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

Fluxo Alternativo: Alteração da senha

a)	O Usuário acessa a página de usuário. <br>
b)	Seleciona a opção de alterar senha. <br>
c)	Insere a senha atual e a nova senha. <br>
d)	A senha do Usuário é alterada. <br>

Fluxo Alternativo: Exclusão de conta

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

Fluxo Principal: Gerenciar conteúdo estático.

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
