let peliculas = [
  {
    titulo: "Spider-Man: Homecoming",
    sinopsis:
      "Peter Parker, un joven estudiante de secundaria, comienza a balancearse por las calles de Nueva York como el superhéroe Spider-Man, tratando de equilibrar su vida como estudiante y su deber como defensor de la ciudad. Cuando un nuevo villano, el Buitre, amenaza a la ciudad, Peter debe enfrentarse a desafíos que pondrán a prueba su valía como héroe.",
    fecha_estreno: "7 de julio de 2017",
    director: "Jon Watts",
    recaudacion: "$880 millones (aprox.)",
    guion: [
      "Jonathan Goldstein",
      "John Francis Daley",
      "Jon Watts",
      "Christopher Ford",
      "Chris McKenna",
      "Erik Sommers",
    ],
    presupuesto: "$175 millones (aprox.)",
    reparto: [
      "Tom Holland como Peter Parker / Spider-Man",
      "Michael Keaton como Adrian Toomes / El Buitre",
      "Robert Downey Jr. como Tony Stark / Iron Man",
      "Marisa Tomei como May Parker",
      "Zendaya como Michelle 'MJ' Jones",
      "Jon Favreau como Happy Hogan",
      "Jacob Batalon como Ned Leeds",
      "Laura Harrier como Liz Allan",
      "Tony Revolori como Flash Thompson",
    ],
    imagen:
      "https://www.loslunesseriefilos.com/wp-content/uploads/2017/07/Spider-Man-Homecoming-Trailer-2_Mar-28-2017-10.37.15-AM.jpeg",
    trailer: "https://www.youtube.com/embed/grusgXCahH8",
  },
  {
    titulo: "Matrix Resurrections",
    sinopsis:
      "Neo, ahora conocido como Thomas Anderson, se encuentra atrapado en una versión modificada de Matrix. Con su mente nuevamente liberada, se une a Trinity para desentrañar los secretos detrás de esta nueva realidad y enfrentar a una amenaza que podría poner en peligro tanto el mundo real como el virtual.",
    fecha_estreno: "22 de diciembre de 2021",
    director: "Lana Wachowski",
    recaudacion: "$775 millones (aprox.)",
    guion: ["Lana Wachowski", "David Mitchell", "Aleksandar Hemon"],
    presupuesto: "$190 millones (aprox.)",
    reparto: [
      "Keanu Reeves como Neo / Thomas Anderson",
      "Carrie-Anne Moss como Trinity",
      "Jada Pinkett Smith como Niobe",
      "Yahya Abdul-Mateen II como Morfeo",
      "Jessica Henwick como Bugs",
      "Neil Patrick Harris como El Analista",
      "Jonathan Groff como Smith",
      "Priyanka Chopra Jonas como Sati",
      "Yahya Abdul-Mateen II como Morfeo",
    ],
    imagen:
      "https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/MXO6OEYPC5N6DKK3EOY2AIZQXE.jpg",
    trailer: "https://www.youtube.com/embed/qjnvX44LoQw",
  },
  {
    titulo: "TRON: Legacy",
    sinopsis:
      "Sam Flynn, el hijo de Kevin Flynn, se embarca en un viaje al mundo virtual de TRON para rescatar a su padre, quien ha estado atrapado allí durante décadas. Juntos, padre e hijo se enfrentarán a desafíos mortales y lucharán por escapar del mundo digital controlado por el malvado Clu.",
    fecha_estreno: "17 de diciembre de 2010",
    director: "Joseph Kosinski",
    recaudacion: "$400 millones (aprox.)",
    guion: ["Edward Kitsis", "Adam Horowitz", "Brian Klugman", "Lee Sternthal"],
    presupuesto: "$170 millones (aprox.)",
    reparto: [
      "Jeff Bridges como Kevin Flynn / Clu",
      "Garrett Hedlund como Sam Flynn",
      "Olivia Wilde como Quorra",
      "Bruce Boxleitner como Alan Bradley / Tron",
      "Michael Sheen como Castor / Zuse",
      "James Frain como Jarvis",
      "Beau Garrett como Gem",
      "Anis Cheurfa como Rinzler",
    ],
    imagen:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/t/tron-legacy-poster-03.jpg",
    trailer: "https://www.youtube.com/embed/L9szn1QQfas",
  },
  {
    titulo: "Piratas del Caribe: La Venganza de Salazar",
    sinopsis:
      "El capitán Jack Sparrow se enfrenta a un nuevo enemigo mortal: el Capitán Salazar, un antiguo rival que ha escapado del Triángulo del Diablo y está decidido a acabar con todos los piratas en el mar. Jack busca el Tridente de Poseidón, un objeto mítico que puede darle el control sobre los mares y ayudarle a enfrentar a Salazar.",
    fecha_estreno: "26 de mayo de 2017",
    director: "Joachim Rønning y Espen Sandberg",
    recaudacion: "$794 millones (aprox.)",
    guion: ["Jeff Nathanson", "Terry Rossio"],
    presupuesto: "$230 millones (aprox.)",
    reparto: [
      "Johnny Depp como Jack Sparrow",
      "Javier Bardem como Capitán Armando Salazar",
      "Geoffrey Rush como Héctor Barbossa",
      "Brenton Thwaites como Henry Turner",
      "Kaya Scodelario como Carina Smyth",
      "Kevin McNally como Joshamee Gibbs",
      "Orlando Bloom como Will Turner",
      "Keira Knightley como Elizabeth Swann",
    ],
    imagen:
      "https://i0.wp.com/www.nairmillos.com/wp-content/uploads/2018/07/Piratas-del-Caribe-La-venganza-de-Salazar.jpg?fit=1280%2C720&ssl=1",
    trailer: "https://www.youtube.com/embed/azjsS0wxTA8",
  },
];

class Pelicula {
  constructor(
    titulo,
    sinopsis,
    fecha_estreno,
    director,
    recaudacion,
    guion,
    presupuesto,
    reparto,
    imagen,
    trailer
  ) {
    this.titulo = titulo;
    (this.sinopsis = sinopsis),
      (this.fecha_estreno = fecha_estreno),
      (this.director = director),
      (this.recaudacion = recaudacion),
      (this.guion = guion),
      (this.presupuesto = presupuesto),
      (this.reparto = reparto),
      (this.imagen = imagen),
      (this.traile = trailer);
  }
}

// export default peliculas
export { peliculas, Pelicula };
