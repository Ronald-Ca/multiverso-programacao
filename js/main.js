//Button 1
function pegarCardInformacoes() {
  //Procurar no meu documento HTML, um elemento com esse ID: ""
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  //Procurar no meu documento HTML e criar um elemento: ""
  const meuHeader = document.createElement("h4");

  //Texto dentro do h4
  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = [
    "HTML5 E CSS3",
    "Web Semântica",
    "JavaScript (ES6)",
    "Lógica de programação",
    "Controle de versão com git",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Aprender a aprender com os erros",
    "Gestão de tempo",
    "Produtividade",
    "Formação de novos hábitos",
    "Comunicação clara e assertiva",
    "Treinamento para entrevista técnica",
    "Colaboração",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

//----------------------------------------------------------------------------------------------------------------------//

//Button 2
function pegarCardInformacoes2() {
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  const meuHeader = document.createElement("h4");

  //Texto dentro do h4
  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = [
    "JavaScript (ES6)",
    "Programação Orientada a Objetos",
    "Programação Funcional",
    "Metodologias Ágeis",
    "Qualidade",
    "TDD com Jest, BDD com Cucumber",
    "Noções de UX",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Aprender a aprender com os erros",
    "Colaboração",
    "Autonomia",
    "Comunicação clara e assertiva",
    "Treinamento para entrevista técnica",
    "Currículo e LinkedIn (Básico)",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

//----------------------------------------------------------------------------------------------------------------------//

//Button 3
function pegarCardInformacoes3() {
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  const meuHeader = document.createElement("h4");

  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = [
    "React",
    "Hooks",
    "State Management",
    "Redux",
    "Componentização, uso de bibliotecas de componentes",
    "Consumo de APIs",
    "Metodologias Ágeis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Autonomia",
    "Colaboração",
    "Construção de marca pessoal",
    "Feedback - como dar e receber",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

//----------------------------------------------------------------------------------------------------------------------//

//Button 4
function pegarCardInformacoes4() {
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  const meuHeader = document.createElement("h4");

  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = [
    "NodeJs, Express",
    "TypeScript",
    "Banco de dados SQL (PostgreSQL)",
    "Construção de APIs RESTful",
    "Programação assíncrona",
    "Metodologias Ágeis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Flexibilidade",
    "Mapeamento de competências",
    "Âncoras de carreira - Assessment",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

//----------------------------------------------------------------------------------------------------------------------//

//Button 5
function pegarCardInformacoes5() {
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  const meuHeader = document.createElement("h4");

  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = [
    "Python",
    "Django",
    "ORM",
    "MongoDB",
    "Amazon AWS",
    "Migrations",
    "Metodologias Ágeis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Adaptação a novos ambientes de trabalho",
    "Persistência",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

//----------------------------------------------------------------------------------------------------------------------//

//Button 6
function pegarCardInformacoes6() {
  const cardInformacoes = document.getElementById("modulo-descricao");
  cardInformacoes.innerHTML = "";

  const meuHeader = document.createElement("h4");

  meuHeader.innerText = "HARD SKILLS";
  meuHeader.classList.add("importante");

  const listaHardSkills = ["Trilha de empregabilidade"];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARAÇÃO PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Construção de portfólio",
    "Planejamento de carreira",
    "Pitch pessoal",
    "Simulações de entrevista",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

// Função de click dos botões
function adicionaClick() {
  const botao = document.getElementById("primeiroBotao");
  botao.addEventListener("click", pegarCardInformacoes);
  const botao2 = document.getElementById("segundoBotao");
  botao2.addEventListener("click", pegarCardInformacoes2);
  const botao3 = document.getElementById("terceiroBotao");
  botao3.addEventListener("click", pegarCardInformacoes3);
  const botao4 = document.getElementById("quartoBotao");
  botao4.addEventListener("click", pegarCardInformacoes4);
  const botao5 = document.getElementById("quintoBotao");
  botao5.addEventListener("click", pegarCardInformacoes5);
  const botao6 = document.getElementById("sextoBotao");
  botao6.addEventListener("click", pegarCardInformacoes6);
}

adicionaClick();
