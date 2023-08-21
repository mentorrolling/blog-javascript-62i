import { Imagen } from "./clases.js";

export const nuevaImagen = (imagen, titulo, descripcion) => {
  return new Imagen(imagen, titulo, descripcion);
};

// {
//     imagen:'',
//     titulo:'',
//     descripcion:''
// }
