export class Imagen {
  constructor(imagen, titulo, descripcion) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.descrip = descripcion;
  }
}

export class Comentario {
  constructor(id, usuario, fecha, texto) {
    this.id = id;
    this.usuario = usuario;
    this.fecha = fecha;
    this.texto = texto;
  }
}
