/*
Crear un formulario para ingresar una imagen, su título y una descripción

Guardar el objeto en una lista en LocalStorage.


class Imagen{
    constructor(imagen, titulo, descripcion){
        this.imagen=imagen
        this.titulo=titulo
        this.descrip=descripcion
    }
}

let img1 = new Imagen('')

Crear una galería de imágenes. Si no hay imágenes cargadas en el LocalStorage, que lo indique por pantalla.

Crear un botón que elimine la imagen que se está mostrando por pantalla y otro que me permita editar solamente el título o descripción.

Modificar el código para que solo se muestre una imagen a la vez, sin su título y descripción.

Cuando hago click sobre una imagen, pasa a la siguiente.

Cuando hago doble click sobre una imagen, muestro por pantalla su título y descripción.

*/

import { nuevaImagen } from "./helpers/funciones.js";
import { Imagen } from "./clases.js";
let galeria = [];

const nuevaImagen = () => {
  let inputImagen = document.querySelector("#input1").value;
  let inputTitulo = document.querySelector("#input2").value;
  let inputDescripcion = document.querySelector("#input3").value;
  let imagen = new Imagen(inputImagen, inputTitulo, inputDescripcion);
  galeria.push(imagen);
};

// let img1=nuevaImagen(inputImagen, inputTitulo, inputDescripcion)
// galeria.push(nuevaImagen(inputImagen, inputTitulo, inputDescripcion))
// {
//     imagen:'',
//     titulo:'',
//     descripcion:''
// }
