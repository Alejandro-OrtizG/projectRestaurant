let menu = document.querySelector(".hamburguesa");
let navegacion = document.querySelector(".navegacion");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

const eventos = () => menu.addEventListener('click', abrirMenu);

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  buttonClose();
}

const buttonClose = () => {
  const btnClose = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  const body = document.querySelector("body");
  body.appendChild(overlay);
  btnClose.textContent = "x";
  btnClose.classList.add("btnClose");
  navegacion.appendChild(btnClose);
  closeMenu(btnClose, overlay);
}

const closeMenu = (button, overlay) => {
  button.addEventListener('click', () => {
    navegacion.classList.add("ocultar");
    overlay.remove();   
  });

  overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add("ocultar");
  }
}

console.log(closeMenu);

closeMenu = 2;

console.log(closeMenu);