const black = document.querySelector("#darkTheme");
const white = document.querySelector("#lightTheme");
const imgNoite = document.querySelector("#lua");
const imgDia = document.querySelector("#sol");
const body = document.querySelector("body");

// Evento para escutar qual cor foi clicada
black.addEventListener("click", noite);
white.addEventListener("click", dia);

// Coloca a cor black no background do body
function noite() {
  // Coloca uma ID no body para escurecer
  body.setAttribute("id", "black");

  // Esconde a opção dark já que ela já foi escolhida
  black.classList.add("hidden");

  // Coloca a imagem da lua
  imgNoite.classList.remove("hidden");

  // Remove a imagem do sol
  imgDia.classList.add("hidden");

  // Mostra a opção do white
  white.classList.remove("hidden");
}

// Coloca a cor white no background do body
function dia() {
  // Coloca uma ID no body para clarear
  body.setAttribute("id", "white");

  // Esconde a opção white já que ela já foi escolhida
  white.classList.add("hidden");

  // Coloca a imagem do sol
  imgDia.classList.remove("hidden");

  // Remove a imagem da lua
  imgNoite.classList.add("hidden");

  // Mostra a opção do black
  black.classList.remove("hidden");
}

/*
function noite() {
  body.setAttribute("id", "black") body.style.backgroundColor = "#292c35";
  black.style.display = "none";
  imgNoite.style.display = "flex";
  white.style.display = "flex";
  imgDia.style.display = "none";
  imgNoite.classList.remove("hidden")
}

function dia() {
  body.setAttribute("id", "white") //body.style.backgroundColor = "#f1f1f1";
  white.style.display = "none";
  imgNoite.style.display = "none";
  black.style.display = "flex";
  imgDia.style.display = "flex";
}
*/
