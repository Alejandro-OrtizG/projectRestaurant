let menu = document.querySelector(".hamburguesa");
let navegacion = document.querySelector(".navegacion");
let imagenes = document.querySelectorAll("img");
let btnTodos = document.querySelector(".todos");
let btnEnsaladas = document.querySelector(".ensaladas");
let btnPasta = document.querySelector(".pasta");
let btnPizza = document.querySelector(".pizza");
let btnPostres = document.querySelector(".postres");
let contenedorPlatillos = document.querySelector(".platillos");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  platillos();
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

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
})

imagenes.forEach(imagen => {
  observer.observe(imagen);
});


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

const platillos = () => {
  let platillosArreglo = [];
  const platillos = document.querySelectorAll(".platillo");
  platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);
  const ensaladas = platillosArreglo.filter(ensalada=>ensalada.getAttribute("data-platillo") === "ensalada");
  const pastas = platillosArreglo.filter(pastas=>pastas.getAttribute("data-platillo") === "pasta");
  const pizzas = platillosArreglo.filter(pizza=>pizza.getAttribute("data-platillo") === "pizza");
  const postres = platillosArreglo.filter(postres=>postres.getAttribute("data-platillo") === "postre");
  mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
  btnEnsaladas.addEventListener('click', () => {
    limpiarHtml(contenedorPlatillos);
    ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
  });
  btnPasta.addEventListener('click', () => {
    limpiarHtml(contenedorPlatillos);
    pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
  });
  btnPizza.addEventListener('click', () => {
    limpiarHtml(contenedorPlatillos);
    pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
  });
  btnPostres.addEventListener('click', () => {
    limpiarHtml(contenedorPlatillos);
    postres.forEach(postre => contenedorPlatillos.appendChild(postre));
  });
  btnTodos.addEventListener('click', () => {
    limpiarHtml(contenedorPlatillos);
    todos.forEach(todo => contenedorPlatillos.appendChild(todo));
  });
}

const limpiarHtml = (contenedor) => {
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
  }
}

