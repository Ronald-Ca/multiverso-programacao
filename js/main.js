const btn = document.getElementById("primeiroBotao");
const container = document.getElementById("modulo-descricao");
let lastButton = null;

btn.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 1) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 1;
});

const btn2 = document.getElementById("segundoBotao");
const container2 = document.getElementById("modulo-descricao");

btn2.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 2) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 2;
});

const btn3 = document.getElementById("terceiroBotao");
const container3 = document.getElementById("modulo-descricao");

btn3.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 3) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 3;
});

const btn4 = document.getElementById("quartoBotao");
const container4 = document.getElementById("modulo-descricao");

btn4.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 4) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 4;
});

const btn5 = document.getElementById("quintoBotao");
const container5 = document.getElementById("modulo-descricao");

btn5.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 5) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 5;
});

const btn6 = document.getElementById("sextoBotao");
const container6 = document.getElementById("modulo-descricao");

btn6.addEventListener("click", function () {
  if (container.style.display === "block" && lastButton === 6) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
  lastButton = 6;
});

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
    "Web Sem??ntica",
    "JavaScript (ES6)",
    "L??gica de programa????o",
    "Controle de vers??o com git",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Aprender a aprender com os erros",
    "Gest??o de tempo",
    "Produtividade",
    "Forma????o de novos h??bitos",
    "Comunica????o clara e assertiva",
    "Treinamento para entrevista t??cnica",
    "Colabora????o",
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
    "Programa????o Orientada a Objetos",
    "Programa????o Funcional",
    "Metodologias ??geis",
    "Qualidade",
    "TDD com Jest, BDD com Cucumber",
    "No????es de UX",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Aprender a aprender com os erros",
    "Colabora????o",
    "Autonomia",
    "Comunica????o clara e assertiva",
    "Treinamento para entrevista t??cnica",
    "Curr??culo e LinkedIn (B??sico)",
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
    "Componentiza????o, uso de bibliotecas de componentes",
    "Consumo de APIs",
    "Metodologias ??geis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Autonomia",
    "Colabora????o",
    "Constru????o de marca pessoal",
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
    "Constru????o de APIs RESTful",
    "Programa????o ass??ncrona",
    "Metodologias ??geis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Flexibilidade",
    "Mapeamento de compet??ncias",
    "??ncoras de carreira - Assessment",
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
    "Metodologias ??geis",
  ];

  const ul = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills[cont];

    ul.append(li);
  }

  const meuHeader2 = document.createElement("h4");
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Adapta????o a novos ambientes de trabalho",
    "Persist??ncia",
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
  meuHeader2.innerText = "SOFT SKILLS E PREPARA????O PARA O MERCADO DE TRABALHO";
  meuHeader2.classList.add("importante");

  const listaHardSkills2 = [
    "Constru????o de portf??lio",
    "Planejamento de carreira",
    "Pitch pessoal",
    "Simula????es de entrevista",
  ];

  const ul2 = document.createElement("ul");

  for (let cont = 0; cont < listaHardSkills2.length; cont++) {
    const li = document.createElement("li");
    li.innerText = listaHardSkills2[cont];

    ul2.append(li);
  }

  cardInformacoes.append(meuHeader, ul, meuHeader2, ul2);
}

// Fun????o de click dos bot??es
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
