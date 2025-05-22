# Especificações do Projeto 

Diante dos avanços tecnológicos e da ampla disseminação de desinformação na internet, nossa aplicação web tem como propósito conscientizar e fornecer apoio à população vulnerável, com foco em idosos, conscientizando-os sobre golpes digitais e desinformação online provenientes de notícias falsas e sites duvidosos.
Nesse contexto, buscamos entregar uma aplicação acessível que dê visibilidade às principais causas do analfabetismo digital, analisando os padrões de desinformação online e desenvolvendo estratégias eficazes para a inclusão da terceira idade no meio digital. 

## Personas

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/a14b4792-a80b-4d56-8d1c-e0d60424dd49)



![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/5e24ae25-c7e1-4b65-88f2-b90c62aef9bc)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/48b83b8c-4da5-4e37-84ff-051e238de35a)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/b3bf0829-6195-43fc-8b9f-fed482599183)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/6181ebc5-e4ba-4c9a-90ce-56933286e6e6)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-desinformacaodigital/assets/160979479/5e0557d1-3743-4a1e-83c5-e1ee7c103e18)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Carlos         | Encontrar um canal que esclareça as notícias falsas em circulação | Esclarecer as notícias que recebe em aplicativos de mensagem e redes sociais |
|Maria Auxiliadora   | Obter informações sobre golpes praticados e como evitá-los | Evitar ser vítima de golpes |
|Maria Auxiliadora   | Obter informações sobre como utilizar novas tecnologias de maneira segura | Perder o receio de utilizar as novas tecnologias | 
|Célia               | Encontrar plataforma que ajude a identificar a confiabilidade de lojas virtuais | Perder o receio de realizar compras online utilizando o cartão de crédito |
|Beatriz             | Encontrar plataforma que reúna informações sobre leis, direitos e instituições de apoio à obtenção de aposentadoria | Obter informações a partir de meios seguros, evitando golpes e pessoas mal intecionadas |
|Alessandra          | Encontrar plataforma que traga esclarecimentos sobre o uso de tecnologias e inovações, utilizando recursos inclusivos para quem possui baixa acuidade visual | Indicar a plataforma para sua mãe, que é acometida por baixa acuidade visual e busca autonomia em suas pesquisas |
|José Honorino      | Encontrar plataforma instrucional fácil de utilizar e com linguagem simples | Aprender a utilizar o computador e a internet, bem como a resolver pequenos problemas que possam surgir durante o uso |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001 | A aplicação deve conter uma página inicial para apresentar o propósito do projeto e informar sobre o funcionamento da aplicação. | ALTA |
|RF-002 | A aplicação deve conter uma página de glossário onde o usuário poderá encontrar as definições de palavras mais usadas em um contexto digital. | ALTA |   
|RF-003 | A aplicação deve conter a página “Real ou falso?" para que o usuário possa encontrar as principais agências que checam a veracidade das notícias do Brasil. | ALTA | 
|RF-004 | A aplicação deve conter a página “Leis Digitais” com informações de leis referentes a golpes virtuais. | ALTA | 
|RF-005 | A aplicação deve disponibilizar a página “Depoimentos” onde o usuário poderá informar seu nome ou comentar de forma anônima em forma de depoimento. | ALTA |
|RF-006 | A aplicação deve permitir que o usuário possa visualizar comentários de outros usuários. | ALTA |
|RF-007 |A aplicação deve conter a página “Clube do Saber: Diversão e Aprendizagem para a Terceira Idade” a qual haverá três jogos: Forca, palavras cruzadas e um Passeio Tecnológico em que o usuário terá perguntas baseadas na página "introdução tecnológica" sobre o funcionamento de aparelhos digitais, a internet, e golpes em formato de quiz. | ALTA |  
|RF-008 | A aplicação deve conter uma ferramenta de pesquisa onde serão listados interesses pré-definidos com base no público-alvo. | ALTA |
|RF-009 | A aplicação deve conter a página “Como identificar um golpe” a qual o usuário aprenderá a identificar os tipos de golpes digitais e como se prevenir de perigos online. | ALTA |
|RF-010 | A aplicação deve conter a página “Ajuda” com acesso a links de sites para ajudar a indentificar tipos de golpes | ALTA |
|RF-011 | Dentro da página “Ajuda” haverá o campo de comentário “precisa de ajuda?”, no qual o usuário poderá mandar uma demanda privada. Será necessário inserir um e-mail, telefone e endereço para contato. A solicitação será enviada a uma conta de e-mail própria da aplicação em que um voluntário do projeto poderá entrar em contato com o usuário para prestar apoio e esclarecer dúvidas. | ALTA |
|RF-012 | A aplicação deve conter a ferramenta de lupa para controlar o zoom do site. | ALTA |
|RF-013 | A aplicação deve conter a página "introdução tecnológica", a qual irá conter informações breves sobre as tecnologias até os tempos de hoje e dicas sobre o uso do computador. | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve processar requisições do usuário em no máximo 3s. |  BAIXA | 
|RNF-002| A aplicação deve ser responsiva e adaptável a qualquer interface. | ALTA |
|RNF-003| A aplicação deve seguir o padrão das heurísticas de Nielsen. | ALTA |
|RNF-004| A aplicação deve ser capaz de ser executado nas versões recentes dos navegadores mais utilizados: Chrome, Firefox, Edge e Safari. | ALTA |
|RNF-005| A aplicação deve possuir um layout de fácil entendimento e as seguintes ferramentas de acessibilidade: Leitor de tela e áudio com pronúncia em duas línguas). | BAIXA |
|RNF-006| Os dados pessoais dos usuários devem ser criptografados antes de serem armazenados. | BAIXA |
|RNF-007| A aplicação deve apresentar um feedback para ações do usuário como confirmações de envio e mensagens de erro | ALTA |

## Restrições
O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                                                |
|--|--------------------------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre.                                                                   |
|02| Não pode ser desenvolvido um módulo de backend.                                                                          |
|03| O projeto somente pode ser desenvolvido nas linguagens HTML, CSS e Java.                                                                          |
|04| O projeto deverá utilizar o framework bootstrap.                                                                   |                                                                   |
|05| O projeto deverá fornecer todas as instruções necessárias para o público-alvo de maneira simples e visualmente apoiadas para contribuir com o entendimento geral da aplicação.                                                        |
|06| O usuário não poderá realizar pagamentos pelo site.   |
|07| Os comentários dos usuários deverão ser limitados a 200 caracteres por comentário. |  ALTA |
|08| A comunicação entre o usuário e os desenvolvedores deverá ocorrer de forma externa à aplicação (e-mail ou telefone).                    |
|09| A aplicação não permitirá criar perfis de usuários "login" a partir da entrega dos dados dos usuários.                            |

