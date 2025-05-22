# Testes

# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Visualizar conteúdo estático**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página inicial; <br> 2) Navegar para as próximas páginas pelo menu de navegação ou ferramenta de próxima página; <br> 3) Verificar se o conteúdo da pagina foi carregado corretamente;
**Requisitos associados** | RF-001, RF-002, RF-003,  RF-004, RF-005, RF-007, RF-009, RF-010, RF-013.
**Resultado esperado** | Certificar que o conteúdo textual e visual esteja sendo exibido. 
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Verificar funcionamento dos botões de zoom**
 :--------------: | ------------
**Procedimento**  | 1) Apertar o botão "zoom mais" para aumentar a fonte dos textos e dar zoom nas imagens; <br> 2) Apertar o botão "zoom menos" para diminuir o tamanho da fonte e imagens; <br> 
**Requisitos associados** | RF-012
**Resultado esperado** | Aumento e redução da fonte nos textos e imagens das páginas
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Verificar funcionamento do menu lateral (navegação rápida)**
 :--------------: | ------------
**Procedimento**  | 1) Apertar o botão do menu lateral  para exibir os links para as páginas; <br> 2) Certificar que os links estão redirecionando para a página desejada; <br> 
**Requisitos associados** | RF-008
**Resultado esperado** | Navegar rápido para a página desejada
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Envio de depoimento (Identificado)**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Preencher o campo "Nome" com um nome válido; <br> 3) Preencher o campo "Depoimento" com um texto válido; <br> 4) Clicar no botão "Enviar depoimento".
**Requisitos associados** | RF-005
**Resultado esperado** | Depoimento enviado.
**Dados de entrada** | 1) Nome; <br> 2) Depoimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Envio de depoimento (Anônimo)**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Deixar o campo "Nome" vazio; <br> 3) Preencher o campo "Depoimento" com um texto válido; <br> 4) Clicar no botão "Enviar depoimento".
**Requisitos associados** | RF-005
**Resultado esperado** | Depoimento enviado de forma anônima.
**Dados de entrada** | Depoimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Visualização de depoimentos enviados**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a página de Depoimentos; <br> 2) Verificar se o depoimento foi enviado;
**Requisitos associados** | RF-006
**Resultado esperado** | Depoimentos enviados são exibidos corretamente, com nomes ou de forma anônima conforme enviados.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 -  Responder uma Palavra Corretamente (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no botão "Responder" ao lado de uma pista; <br> 2) Digitar a resposta correta;
**Requisitos associados** | RF-007
**Resultado esperado** | A palavra fica verde indicando que está correta.
**Dados de entrada** | Resposta correta para uma pista específica. Ex.: Pista 1 - Resposta: Tela.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 -  Responder uma Palavra Incorretamente (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no botão "Responder" ao lado de uma pista; <br> 2) Digite uma resposta incorreta.
**Requisitos associados** | RF-007
**Resultado esperado** | A palavra fica vermelha indicando que está incorreta.
**Dados de entrada** | Resposta incorreta para uma pista específica.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 -  Utilizar o Botão "Apagar (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Insira pelo menos uma palavra correta ou incorreta na grade; <br> 2) Clique no botão "Apagar.
**Requisitos associados** | RF-007	
**Resultado esperado** | Todas as respostas inseridas são removidas da grade.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 -  Utilizar o Botão "Solução (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Solução";
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Todas as respostas corretas são automaticamente preenchidas na grade; <br> 2) Todas as palavras ficam verdes indicando que estão corretas; <br> 3) Exibição de um pop-up de parabenização ao acertar todas as palavras.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 -  Interação do Usuário com a Interface (Palavras Cruzadas)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em diferentes pistas para responder; <br> 2) Insira respostas em diferentes ordens; <br> 3) Utilize os botões "Responder", "Apagar" e "Solução" em combinação.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) A interface responde corretamente a cada clique; <br> 2) As respostas são inseridas na posição correta conforme a pista selecionada; <br> 3) Os botões funcionam conforme especificado em todos os cenários testados.
**Dados de entrada** | Respostas corretas e incorretas para várias pistas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Acessar a página "Passeio Tecnológico"**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial; <br> 2) Localize o card "Clube do Saber" descendo a página e o acesse; <br> 3) Na página do "Clube do Saber", localize o card "Passeio Tecnológico" ao final da página e o acesse.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) A página "Clube do Saber" deve ser facilmente acessada a partir dos cards da página inicial; <br> 2) A página "Passeio Tecnológico" deve ser facilmente localizada na página "Clube do Saber"; <br> 3) Os cards de acesso às páginas mencionadas devem funcionar corretamente.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Acessar perguntas do quiz e responder corretamente (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em um dos círculos numerados; <br> 2) Selecione a resposta correta para a pergunta feita; <br> 3) Clique no botão "Enviar Resposta"; <br> 4) Clique no botão "OK" do pop up que aparecer.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Os círculos numerados devem responder ao clique, apresentando um pop up contendo uma pergunta e três opções de resposta; <br> 2) O botão "Enviar a Resposta" deve fazer com que a resposta correta seja submetida e retornar um pop up informando "Resposta correta! Avance para a próxima etapa!"; <br> 3) O botão "OK" do pop up que informa que a resposta está correta deve funcionar para fechar o pop up.
**Dados de entrada** | Resposta correta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Acessar perguntas do quiz e responder incorretamente (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique em um dos círculos numerados; <br> 2) Selecione a resposta incorreta para a pergunta feita; <br> 3) Clique no botão "Enviar Resposta"; <br> 4) Clique no botão "OK" do pop up que aparecer.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Os círculos numerados devem responder ao clique, apresentando um pop up contendo uma pergunta e três opções de resposta; <br> 2) O botão "Enviar a Resposta" deve fazer com que a resposta incorreta seja submetida e retornar um pop up informando "Tente novamente"; <br> 3) O botão "OK" do pop up que orienta a tentar novamente deve funcionar para fechá-lo e manter a visualização do pop up contendo a pergunta e as três opções de resposta.
**Dados de entrada** | Resposta incorreta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT15 - Utilizar o botão "Parabéns!" (Passeio Tecnológico)**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Parabéns!" ao final da página "Passeio Tecnológico".
**Requisitos associados** | RF-007
**Resultado esperado** | 1) O clique no botão "Parabéns!" deverá retornar o usuário à página "Clube do Saber".
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT16 - Adequação da aplicação às heurísticas de Nielsen**
 :--------------: | ------------
**Procedimento**  | 1) Acesse as páginas da aplicação.<br> 2) De acordo com as heurísticas de Nielsen, foram implementadas interfaces simples e de fácil reconhecimento pelo usuário.
**Requisitos associados** | RNF-003
**Resultado esperado** | O usuário deve conseguir navegar de maneira simples, eficiente e intuitiva.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT17 - Feedback para ações**
 :--------------: | ------------
**Procedimento**  | 1) Abrir os pop-ups de retorno de ação do usuário nas páginas dinâmicas.
**Requisitos associados** | RNF-007
**Resultado esperado** | 1) E xibição correta do retorno das ações.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT18 - Compatibilidade em navegadores: Chrome, Firefox, Edge e Safari**
 :--------------: | ------------
**Procedimento**  | 1) Certificar funcionamento e carregamento das páginas nos navegadores.
**Requisitos associados** | RNF-004
**Resultado esperado** | 1) Exibição correta das páginas.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso. Não foi possível testar o site no navegador Safari.

**Caso de Teste** | **CT19 - Interação do Usuário com a Interface (Forca)**
 :--------------: | ------------
**Procedimento**  | 1) Verificar funcionamento do corpo do enforcado de 0 a 6. <br> 2) Certificar funcionamento das teclas. <br> 3) Verificar funcionamento DO POP-UP de parabéns e perdeu.
**Requisitos associados** | RF-007
**Resultado esperado** | 1) Certificar funcionamento DO POP-UP.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT20 - Interação do Usuário com a Interface (Ajuda)**
 :--------------: | ------------
**Procedimento**  | 1)Acessar a pagina de ajuda. <br> 2)Preencher os campos do formulário. <br> 3)Certifcar funcionamento dos links das paginas adicionais de ajuda. <br> 4) Certificar funcionamento do formulario  <br> 5) Verificar funcionamento do POP-UP de envio da dúvida.
**Requisitos associados** | RF-011
**Resultado esperado** | 1) Duvida enviada.
**Dados de entrada** | 1)Nome. <br> 3)Dúvida
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT21 - (Responsividade e adaptabilidade a qualquer interface)**
 :--------------: | ------------
**Procedimento**  | 1) Certifcar funcionamento da responsividade
**Requisitos associados** | RNF-002
**Resultado esperado** | 1) Teste responsividade e adaptabilidade a qualquer interface.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT22 -  Ajuste na responsividade da pagina (Como Indentificar um Golpe)**
 :--------------: | ------------
**Procedimento**  | 1) Certifcar funcionamento da responsividade
**Requisitos associados** | RF-009
**Resultado esperado** | 1) Teste responsividade  a qualquer interface.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01 - Visualizar conteúdo estático*                                         |
|---|---|
|Requisito Associado |RF-001 - A aplicação deve conter uma página inicial para apresentar o propósito do projeto e informar sobre o funcionamento da aplicação.|
|Requisito Associado | RF-002	A aplicação deve conter uma página de glossário onde o usuário poderá encontrar as definições de palavras mais usadas em um contexto digital.
|Requisito Associado | RF-003	A aplicação deve conter a página “Real ou falso?" para que o usuário possa encontrar as principais agências que checam a veracidade das notícias do Brasil.
|Requisito Associado | RF-004	A aplicação deve conter a página “Leis Digitais” com informações de leis referentes a golpes virtuais.
|Requisito Associado | RF-005	A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.
|Requisito Associado | RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.
|Requisito Associado | RF-009	A aplicação deve conter a página “Como identificar um golpe” a qual o usuário aprenderá a identificar os tipos de golpes digitais e como se prevenir de perigos online.
|Requisito Associado | RF-010	A aplicação deve conter a página “Ajuda” com acesso a links de sites para ajudar a indentificar tipos de golpes.
|Requisito Associado | RF-013	A aplicação deve conter a página "introdução tecnológica", a qual irá conter informações breves sobre as tecnologias até os tempos de hoje e dicas sobre o uso do computador.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/6256d408-c2ea-4c60-bc5c-de24dffc2763 | 



 

|*Caso de Teste*                                 |*CT02 - Verificar funcionamento dos botões de zoom*                                        |
|---|---|
|Requisito Associado |RF-012	A aplicação deve conter a ferramenta de lupa para controlar o zoom do site.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/162225477/ac36b24e-19e3-4bd7-be98-22dfc68b179e





|*Caso de Teste*                                 |*CT03 - Verificar funcionamento do menu lateral (navegação rápida)*                                        |
|---|---|
|Requisito Associado |RF-008	A aplicação deve conter uma ferramenta de pesquisa onde serão listados interesses pré-definidos com base no público-alvo.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/162225477/d855a037-2625-4fce-9808-afdb7b05ce74 





|*Caso de Teste*                                 |*CT04 - CT04 - Envio de depoimento (Identificado)*                                        |
|---|---|
|Requisito Associado |RF-005 A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/a77d8af6-8515-4d23-9f34-1872fff59d94 | 

|*Caso de Teste*                                 |*CT05 - CT05 - Envio de depoimento (Anônimo)*                                        |
|---|---|
|Requisito Associado |RF-005	A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/a77d8af6-8515-4d23-9f34-1872fff59d94 | 

|*Caso de Teste*                                 |*CT06 - CT06 - Visualização de depoimentos enviados*                                        |
|---|---|
|Requisito Associado |RF-006	A aplicação deve permitir que o usuário possa visualizar comentários de outros usuários.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/a77d8af6-8515-4d23-9f34-1872fff59d94 | 

|*Caso de Teste*                                 |*CT07 - CT07 - Responder uma Palavra Corretamente (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3b6ef87c-3731-4ecf-ab64-1ce1acac62ac | 

|*Caso de Teste*                                 |*CT08 - CT08 - Responder uma Palavra Incorretamente (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3b6ef87c-3731-4ecf-ab64-1ce1acac62ac | 

|*Caso de Teste*                                 |*CT09 - CT09 - Utilizar o Botão "Apagar (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3b6ef87c-3731-4ecf-ab64-1ce1acac62ac  | 

|*Caso de Teste*                                 |*CT10 - CT10 - Utilizar o Botão "Solução (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3b6ef87c-3731-4ecf-ab64-1ce1acac62ac | 

|*Caso de Teste*                                 |*CT11 - CT11 - Interação do Usuário com a Interface (Palavras Cruzadas)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3b6ef87c-3731-4ecf-ab64-1ce1acac62ac | 

|*Caso de Teste*                                 |*CT12 - CT12 - Acessar a página "Passeio Tecnológico"*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/161775213/48e0668c-d0e2-4921-b523-93dff1ec3bbd | 

|*Caso de Teste*                                 |*CT13 - CT13 - Acessar perguntas do quiz e responder corretamente (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/161775213/e40691d6-582f-4d2e-af73-8084340794e5 | 

|*Caso de Teste*                                 |*CT14 - CT14 - Acessar perguntas do quiz e responder incorretamente (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/162225477/4d5336ba-2499-4f3f-bc82-7d61ad2d9c9d | 

|*Caso de Teste*                                 |*CT15 - CT15 - Utilizar o botão "Parabéns!" (Passeio Tecnológico)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/161775213/31d15dd2-4626-4396-9315-7b5afdd5ebb1 | 

|*Caso de Teste*                                 |*CT16 - CT16 - Adequação da aplicação às heurísticas de Nielsen*                                        |
|---|---|
|Requisito Associado |RNF-003	A aplicação deve seguir o padrão das heurísticas de Nielsen.|
|Link do vídeo do teste realizado: | https://1drv.ms/b/s!Avu0qF3ahHqggoJTvnJfVWehY2Mnvw?e=Q2fBHf | 

|*Caso de Teste*                                 |*CT17 -Feedback para ações *                                        |
|---|---|
|Requisito Associado |RNF-007	A aplicação deve apresentar um feedback para ações do usuário como confirmações de envio e mensagens de erro|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/eda601d7-8cd3-4211-9476-53af04008b8a | 

|*Caso de Teste*                                 |*CT18 - Compatibilidade em navegadores: Chrome, Firefox, Edge e Safari*                                        |
|---|---|
|Requisito Associado |RNF-004	A aplicação deve ser capaz de ser executado nas versões recentes dos navegadores mais utilizados: Chrome, Firefox, Edge e Safari.|
|Link do vídeo do teste realizado: | Google Chrome https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/8a534508-f848-47b3-8981-29a9b34525e1 
|Link do vídeo do teste realizado: | Mozilla Firefox  https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/3a74c2d7-a80b-4326-8851-52f16ef7b986
|Link do vídeo do teste realizado: | Microsoft Edge https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/15ee8e93-82b9-4c3b-8c00-83afc1f38a3c
|Link do vídeo do teste realizado: | Safari  não foi possível o teste. | 

|*Caso de Teste*                                 |*CT19 - Interação do Usuário com a Interface (Forca)*                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!Avu0qF3ahHqggoJUS6zTEBvBdfZQIA?e=kDG1Zp |

|*Caso de Teste*                                 |*CT20 - Interação do Usuário com a Interface (Ajuda)*                                        |
|---|---|
|Requisito Associado |RF-011	Dentro da página “Ajuda” haverá o campo de comentário “precisa de ajuda?”, no qual o usuário poderá mandar uma demanda privada. Será necessário inserir um e-mail, telefone e endereço para contato. A solicitação será enviada a uma conta de e-mail própria da aplicação em que um voluntário do projeto poderá entrar em contato com o usuário para prestar apoio e esclarecer dúvidas.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/46b31348-9e86-497e-b35c-fc7493652c95 |

|*Caso de Teste*                                 |CT21 - Responsividade e adaptabilidade a qualquer interface*|
|---|---|
|Requisito Associado |RNF-002	A aplicação deve ser responsiva e adaptável a qualquer interface.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/161775213/20aaebb0-950e-4b0d-baef-29e6f79b975d |

|*Caso de Teste*                                 |CT22 - Ajuste na responsividade da pagina (Como Indentificar um Golpe)*|
|---|---|
|Requisito Associado |RF-009	A aplicação deve conter a página “Como identificar um golpe” a qual o usuário aprenderá a identificar os tipos de golpes digitais e como se prevenir de perigos online.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/161775213/35d6f88d-ad86-4c77-979d-d26c9f958bc3 |

## Avaliação dos Testes de Software

Os casos de teste de software foram pensados de modo a possibilitar que todas os requisitos funcionais e não funcionais fossem testados previamente à utilização pelo usuário final. Deste modo, o teste de software em questão foi feito de maneira criteriosa e minuciosa, tendo permitido a análise do funcionamento das ferramentas da aplicação e, concomitantemente, a identificação de pontos de melhoria futuras. 

A partir dos testes realizados foi possível concluir que a aplicação atendeu satisfatoriamente às expectativas de funcionamento da equipe de trabalho e cumpriu todos os requisitos funcionais e não funcionais propostos como de alta prioridade. A navegabilidade se mostrou intuitiva e facilitada, como pretendido, com ferramentas de acessibilidade funcionando corretamente para facilitar a navegação pelo público alvo.

A realização dos testes se mostrou de crucial importância, haja vista que permitiu identificar pontos de melhoria imediata que foram prontamente implementadas. Neste sentido, durante o teste referente à aplicação das heurísticas de Nielsen foi possível verificar que os formulários das páginas "Ajuda" e "Depoimentos" não apresentavam as funcionalidades de reparação de erros, consubstanciadas em mensagens de alerta ao usuário quando este tentasse encaminhar os formulários sem o devido preenchimento dos campos necessários, o que foi corrigido pela equipe tão logo identificado. Também em virtude do que se identificou nos testes de software, foram implementadas máscaras nos campos de formulários que demandam o preenchimento de números (telefone), a fim de facilitar a utilização pelo usuário. 

Como ponto de melhoria a ser implementada futuramente, pode-se apontar a necessidade de tornar mais rápida a resposta da página "Leis Digitais", uma vez que, embora não haja prejuízo ao funcionamento da página, verificou-se que esta página apresenta tempo de resposta ligeiramente maior em relação às demais páginas da aplicação. Este ajuste não foi implementado de imediato em virtude das limitações de tempo para desenvolvimento e por demandar da equipe uma análise criteriosa das razões que levam a esse aumento do tempo de resposta, das medidas necessárias para correção da questão apontada e da realização de novos testes para confirmação do sucesso da melhoria implementada, além do fato de não haver prejuízo significante que demande manobras imediatas de correção. 

Finalmente, em futura iteração, pretende-se implementar funcionalidades declaradas como de baixa prioridade. No caso da aplicação em análise, cita-se a funcionalidade de leitura em voz alta dos textos, medida que contribuirá para acessibilidade e ampliação do alcance a público ainda maior. Dadas as limitações técnicas e de tempo, a medida não pôde de ser implentada neste momento, posto que demandaria ajustes detalhistas em todas as páginas da aplicação. 


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você quer saber mais sobre os tipos comuns de golpes praticados online e como evitá-los. Utilize a página "Como identificar um Golpe?" para acessar dicas e sinais de alerta que ajudem a proteger-se contra fraudes na internet.  |
| 2             | Você recebeu uma notícia via aplicativo de mensagens e deseja verificar se ela é verdadeira ou falsa. Então você deve utilizar a página "Real ou Falso?" e buscar uma seção ou ferramenta que esclareça a notícia recebida. |
| 3             | Você está interessado em leis digitais e como elas afetam sua segurança online. Utilize a página "Leis Digitais" para acessar recursos sobre legislação e proteção na internet.  |
| 4             | Você deseja encontrar ajuda ou possui alguma dúvida, na qual você não encontrou no site. Utilize a página "Ajuda" para encaminhar suas dúvidas e/ou encontrar instituições de apoio.  |
| 5             | Você quer aprender o básico sobre o uso do computador e como resolver problemas simples. Utilize a página "Introdução Tecnológica" para encontrar tutoriais ou guias com uma linguagem simples e instruções claras.  |
| 6             | Você quer explorar jogos interativos para testar seus conhecimentos adquiridos sobre tecnologia e segurança digital aprendida no site. Utilize a página "CLUBE DO SABER" para jogar Passeio Tecnológico.  |

## Registro de Testes de Usabilidade

Cenário 1: Você quer saber mais sobre os tipos comuns de golpes praticados online e como evitá-los. Utilize a página "Como identificar um Golpe?" para acessar dicas e sinais de alerta que ajudem a proteger-se contra fraudes na internet. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1 ( 60 / Dispositivo celular )   | SIM  | 3 | 180.27 segundos                  |
| 2 ( 80 / Desktop)    | SIM    | 5 | 98.32 segundos             |
|  |  |  |  |
| **Média**     |   100%    |          4       | 139.29 segundos                          |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 33.31 segundos |


    Comentários dos usuários: Usuário 1:Informações dos golpes foram claras e compreensivas. 
    Pode haver melhoria na navegação da página para ser mais breve, pois acabei gastando mais tempo com dificuldade por estar utilizando a página em dispositivo celular.

Cenário 2: Você recebeu uma notícia via aplicativo de mensagens e deseja verificar se ela é verdadeira ou falsa. Então você deve utilizar a página "Real ou Falso?" e buscar uma seção ou ferramenta que esclareça a notícia recebida. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1 ( 60 / Dispositivo celular ) | SIM       | 5   | 69.06 segundos              |
| 2 ( 80 / Desktop ) | SIM           |   5                  |  77.14 segundos                         |                      |
|  |  |  |  |
| **Média**     |       100%    |          5       | 73.01 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.95 segundos |


    Comentários dos usuários: As informações foram claras, me passou confiabilidade e segurança ao me indicar sites confiáveis para consulta da notícia. 
    Página objetiva!

Cenário 3: Você está interessado em leis digitais e como elas afetam sua segurança online. Utilize a página "Leis Digitais" para acessar recursos sobre legislação e proteção na internet.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1  ( 60 / Dispositivo celular )     | SIM    | 5 | 68.39 segundos                 |
| 2  ( 80 / Desktop )     | SIM          | 5                    | 64.85 segundos                          | 
|  |  |  |  |
| **Média**     |      100%     |     5            | 66.62 segundos                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 29.35 segundos |


    Comentários dos usuários: Conteúdo da página interessante, simples e de fácil acesso.
    
Cenário 4: Você deseja encontrar ajuda ou possui alguma dúvida, na qual você não encontrou no site. Utilize a página "Ajuda" para encaminhar suas dúvidas e/ou encontrar instituições de apoio. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   ( 60 / Dispositivo celular )    | SIM             | 5                    | 144.71 segundos                          |
| 2   ( 80 / Desktop )    | SIM           |  5                   | 219.71 segundos                        | 
|  |  |  |  |
| **Média**     |        100%    |         5        | 182.21 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 48.63 segundos |


    Comentários dos usuários: Página muito bem estruturada e dinâmica. 
    Poderia ser mais breve do tempo gasto, devido a quantidade de informações solicitadas, gastei mais tempo preenchendo.
 
    
Cenário 5: Você quer aprender o básico sobre o uso do computador e como resolver problemas simples. Utilize a página "Introdução Tecnológica" para encontrar tutoriais ou guias com uma linguagem simples e instruções claras. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   ( 60 / Dispositivo celular )    | SIM             | 5                    | 82.35 segundos                          |
| 2   ( 80 / Desktop )    | SIM           |  5                   | 95.79 segundos                          |  
|  |  |  |  |
| **Média**     |         100%  |           5      | 89.07 segundos                        |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 33.51 segundos |


    Comentários dos usuários: Dicas e tutoriais muito interessante e importantes. 
    Dificuldade visual de início, porém usando o zoom consegui ler direitinho.
    Muito bem organizado e estruturado, de forma clara e sugestiva.
    
Cenário 6: Você quer explorar jogos interativos para testar seus conhecimentos adquiridos sobre tecnologia e segurança digital aprendida no site. Utilize a página "CLUBE DO SABER" para jogar Passeio Tecnológico. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   ( 60 / Dispositivo celular )    | SIM             | 5                    | 167.95 segundos                          |
| 2  ( 80 / Desktop )    | SIM           |5                     | 233.20 segundos                         | 
|  |  |  |  |
| **Média**     |   100%        |             5    | 200.57 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 74.97 segundos |


    Comentários dos usuários: Ajuda entreter e ao mesmo tempo gera conhecimento sobre a tecnologia e os cuidados com as desinformações de hoje no mundo. 
    Bem organizado. 
    Interessante. 
    Espetacular a página!

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos dos seis cenários avaliados, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que todos os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova disso são as médias das avaliações em cada um dos cenários, que variaram entre 4 (bom) e 5 (ótimo), demonstrando que os usuários ficaram amplamente satisfeitos com a experiência proporcionada.

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepâncias entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 139.29 segundos — média dos usuários — contra 33.31 segundos — especialista — no cenário um), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade. Em particular, a navegação em dispositivos móveis parece ser um ponto de atenção, pois alguns usuários relataram dificuldades adicionais e tempos de conclusão mais longos ao utilizarem smartphones.

A seguir, alguns pontos destacados pelos usuários em seus comentários:

Cenário 1: "Como identificar um Golpe?": Informações claras e compreensivas.

Cenário 2: "Real ou Falso?": Página objetiva e informações claras, transmitindo confiança e segurança.

Cenário 3: "Leis Digitais": Conteúdo interessante e de fácil acesso, bem estruturado.

Cenário 4: "Ajuda": Página dinâmica e bem estruturada.

Cenário 5: "Introdução Tecnológica": Dicas e tutoriais claros e organizados.

Cenário 6: "CLUBE DO SABER": Página interessante e educativa e divertida.

Com base nesses resultados e comentários, o site demonstra um bom desempenho em termos de usabilidade, mas ainda existem áreas a serem aprimoradas, especialmente na eficiência de navegação e na adaptação para dispositivos móveis. Ao focar nessas melhorias, a experiência do usuário pode ser ainda mais otimizada, garantindo uma interação mais rápida e intuitiva.



