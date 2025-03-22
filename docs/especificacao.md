# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta seção será apresentada a documentação de requisitos da aplicação Infoclube

## 3.1 Objetivos deste documento
O objetivo desse documento é especificar e decalrar as necessidades para o desenvolvimento de um aplicativo web que fornecerá conteúdo didático sobre tecnologia, visando combater o analfabetismo digital.

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


| RF1 | Criar usuário | A aplicação deve permitir que os usuários criem usuário e senha para acessar o sistema. Podendo editar ou excluir as informações de acesso. A criação do usuário é opcional |
| RF2 |	Gerenciar usuário	|Processamento de Inclusão, Alteração e Exclusão de perfil, com o fornecimento de informações básicas obrigatórias de identificação (nome, e-mail, telefone) e informações opcionais (data de nascimento, cidade, estado, foto de perfil, redes sociais). |
| RF3 | Gerenciar conteudo |  Inclusão, exclução e edição do conteúdo do software |
| RF4 |	Gerenciar comentários	|Incluir, visualizar, responder, excluir e editar  comentários.  |
| RF5 |	Pesquisar conteúdo	|Ferramenta de pesquisa para listagem de interesses pré-definidos com base no público-alvo.  |
| RF6 |	Controlar zoom da visualização| Controle do zoom da visualização do software a partir de uma ferramenta de lupa.|
| RF7 |	Fazer download do conteúdo	| O software deve permitir o salvamento de conteúdo para leitura posterior.  |
| RF8 | Imprimir conteúdo| O software deve possuir botão de impressão para permitir que o usuário imprima as páginas em PDF ou em impressora local.|
| RF9 |Enviar feedback ou Dúvida.|A aplicação deve permitir que os usuários enviem feedback ou dúvidas aos administradores e visualizem os mesmos em seus perfis.|
| RF10 | A aplicação deve permitir que os usuários façam login no sistema.|
| RFF11 | A aplicação deve permitir que os usuários saiam do sistema.|



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

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

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
