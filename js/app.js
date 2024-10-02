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
  if(document.querySelectorAll(".pantalla-completa").length > 0) return;
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
    boton.remove(); 
  });

  overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  }
}

console.log(closeMenu);

closeMenu = 2;

console.log(closeMenu);