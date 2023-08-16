import { peliculas } from "../data/peliculas.js";

// let peliculas = [];

// peliculas = peliculas.concat(data);

let contenedorBlog = document.querySelector("#content-blog");
let sectionInicioSesion = document.querySelector("#linkInicioSesion");
let auth = JSON.parse(localStorage.getItem("auth")) || null;

if (auth) {
  sectionInicioSesion.innerHTML = "";
  let img = document.createElement("img");
  img.src = auth.avatar;
  img.alt = auth.user;
  img.classList = "bg-light user-avatar";

  let hipervinculo = document.createElement("a");
  hipervinculo.href = "/pages/admin.html"; //<a href=''><img> </a>

  hipervinculo.appendChild(img);
  sectionInicioSesion.append(hipervinculo);
}

const cargarEntradas = () => {
  peliculas.map((pelicula, index) => {
    let col = document.createElement("div");
    col.classList = "col";
    //<div class="col">    </div>

    let tarjeta = `<div class="card h-100">
<img src=${pelicula.imagen} class="card-img-top" alt=${pelicula.titulo}>
<div class="card-body">
<a href='/pages/post.html?posicion=${index}' class="nav-link" >
<h5 class="card-title">${pelicula.titulo}</h5>
</a>
 
  <p class="card-text">${pelicula.sinopsis}</p>
</div>
</div>`;

    col.innerHTML = tarjeta;
    contenedorBlog.append(col);
  });
};

cargarEntradas();
