const black = document.querySelector("#darkTheme");
const white = document.querySelector("#lightTheme");
const imgNoite = document.querySelector("#lua");
const imgDia = document.querySelector("#sol");
const main = document.querySelector("main");

// Evento para escutar qual cor foi clicada
black.addEventListener("click", noite);
white.addEventListener("click", dia);

// Acrescentar a cor black no background do main
function noite() {
  // Coloca uma ID no main para escurecer
  main.setAttribute("id", "black");

  // Esconde a opção dark já que ela já foi escolhida
  black.classList.add("hidden");

  // Coloca a imagem da lua
  imgNoite.classList.remove("hidden");

  // Remove a imagem do sol
  imgDia.classList.add("hidden");

  // Mostra a opção do white
  white.classList.remove("hidden");
}

// Acrescentar a cor white no background do main
function dia() {
  // Coloca uma ID no main para clarear
  main.setAttribute("id", "white");

  // Esconde a opção white já que ela já foi escolhida
  white.classList.add("hidden");

  // Coloca a imagem do sol
  imgDia.classList.remove("hidden");

  // Remove a imagem da lua
  imgNoite.classList.add("hidden");

  // Mostra a opção do black
  black.classList.remove("hidden");
}
