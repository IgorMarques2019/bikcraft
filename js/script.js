//Ativar menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("active");
  }
}
links.forEach(ativarLink);

//Ativar items do orçamento
const parametros = new URLSearchParams(location.search);
function ativarParametos(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

parametros.forEach(ativarParametos);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPeguntas(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");

  if (ativa) {
    pergunta.setAttribute("aria-expanded", ativa);
  } else {
    pergunta.setAttribute("aria-expanded", ativa);
  }
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPeguntas);
}
perguntas.forEach(eventoPerguntas);

new ClipboardJS(".btn");
