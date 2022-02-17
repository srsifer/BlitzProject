# Boas vindas ao repositório Blitz challend! 

### Essa aplicação está hospedada no Heroku! você pode ver o funcionamento atravéz do link abaixo 
https://blitzchallengigor.herokuapp.com/

OBS! O heroku coloca a aplicação em estado de standby, portanto pode ser que ao clicar no link ela demore um pouco pra abrir devido ao baixo numero de acesso.

## Para rodar esse projeto em sua maquina (distro: ubunto + ambiente nodeJS)

1. Clone o repositório
  * `git clone git@github.com:srsifer/BlitzProject.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd BlitzProject`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

obs: caso não tenha o nodeJS no seu sistema Ubunto execute as seguintes linhas de comando no seu terminal 
 * `sudo apt-get install nodejs`
<br>
  para confirmar a versão instalada rode o comando
  
  
 * `node --version` e `npm --version`

# Habilidades

Nesse projeto, eu aprendi:

- Utilizar o useEffect para executar uma ação após o componente ser inserido no DOM;
- Utilizar o renderização condicional para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o useEffect para executar uma ação após o componente ser atualizado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;

## O que foi desenvolvido

Eu criaei um **CRUD** de tarefas em React. 
A sigla **CRUD** significa, _Create, Read, Update and Delete_.

  - Adicionar um nova tarefa à lista - **CREATE**;
  - Listar todos as tarefas cadastradas **READ**;
  - Editar uma tarefa da lista - **UPDATE**;
  - E apagar uma tarefa da lista - **DELETE**;

## Desenvolvimento

O app se resume a uma unica pagina com botoes interativos, para fazer as adiçoes das suas tarefas
como adicionar, editar, salvar alteração, excluir.

## futuro da lista 
ainda é preciso criar: 
  -ordenar a lista por ordem alfabetica ou criação
  -concluir a tarefa
  -salvar o estado das tarefas no localestorage e mandar para o backend
  -tela de loguin para suas tarefas
  -API Rest, com banco noSQL (mongoDB)

## agradecimentos 
 Gostaria de agradecer a **TRYBE** e ao seu **time de carreira** que tornou possivel esse desafio.
 no caminho encontrei dificuldades no desenvolvimento frontend como fazer uma boa utilização do contextApi.
 identifiquei alguns pontos a serem melhorados graças a esse desafio tecnico  **OBRIGADO**