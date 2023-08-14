import data from "../data/peliculas.json" assert { type: "json" };

let peliculas = [];

peliculas = peliculas.concat(data);

let contenedorBlog = document.querySelector("#content-blog");
let sectionInicioSesion = document.querySelector("#linkInicioSesion");
let auth = JSON.parse(localStorage.getItem("auth")) || null;

const cargarEntradas = () => {
  peliculas.map((pelicula) => {
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card h-100">
<img src=${pelicula.imagen} class="card-img-top" alt=${pelicula.titulo}>
<div class="card-body">
  <h5 class="card-title">${pelicula.titulo}</h5>
  <p class="card-text">${pelicula.sinopsis}</p>
</div>
</div>`;
    col.innerHTML = tarjeta;
    contenedorBlog.append(col);
  });
};

cargarEntradas();
