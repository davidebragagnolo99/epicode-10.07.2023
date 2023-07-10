/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("Esercizio-1");
function concatenaStringhe(stringa1, stringa2) {
  const primoCarattere = stringa1.slice(0, 2);
  const secondoCarattere = stringa2.slice(-3);
  const r1 = primoCarattere + secondoCarattere;
  const risultatoMaiuscolo = r1.toUpperCase();
  console.log(risultatoMaiuscolo);
}
const stringa1 = "Davide";
const stringa2 = "Bragagnolo";
concatenaStringhe(stringa1, stringa2);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("Esercizio-2");
const random10 = () => {
  const array = [];
  for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 101));
  }
  return array;
};
console.log(random10());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("Esercizio-3");
function ricavaValoriPari(array) {
  const valoriPari = array.filter((numero) => numero % 2 === 0);
  return valoriPari;
}
const arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r2 = ricavaValoriPari(arrayNumerico);
console.log(r2);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("Esercizio-4");
function sommaNumeri(array) {
  let somma = 0;
  array.forEach((numero) => {
    if (typeof numero === "number") {
      somma += numero;
    }
  });
  return somma;
}
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r3 = sommaNumeri(arrayNumber);
console.log(r3);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("Esercizio-5");
function sommaNumeri(array) {
  const somma = array.reduce((acc, numero) => acc + numero, 0);
  return somma;
}
const arrayNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r4 = sommaNumeri(arrayNum1);
console.log(r4);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("Esercizio-6");
function incrementaArray(array, n) {
  const arrayIncrementato = array.map((numero) => numero + n);
  return arrayIncrementato;
}
const arrayNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroIncremento = 10;
const r5 = incrementaArray(arrayNum2, numeroIncremento);
console.log(r5);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("Esercizio-7");
const lunghezze = (array) => {
  return array.map((elem) => elem.length);
};
console.log(lunghezze(["EPICODE", "is", "great"]));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("Esercizio-8");
const oddOnly = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};
console.log(oddOnly());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("Esercizio-9");
const filmPiùVecchio = (array) => {
  let result = { Year: 2020 };
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year);
    if (currentYear < result.Year) {
      result = movie;
    }
  });
  return result;
};
console.log(filmPiùVecchio(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("Esercizio-10");
const totalMovies = (array) => {
  return array.length;
};
console.log(totalMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("Esercizio-11");
function onlyTitlesFilm(arrayFilms) {
  const titoliFilm = arrayFilms.map((film) => film.Title);
  return titoliFilm;
}
const titoliFilm = onlyTitlesFilm(movies);
console.log(titoliFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("Esercizio-12");
const filmInQuestoMillennio = (array) => {
  return array.filter((movie) => {
    return parseInt(movie.Year) > 1999;
  });
};
console.log(filmInQuestoMillennio(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("Esercizio-13");
const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("Esercizio-14");
const trovaFilmById = function (array, id) {
  return array.find((film) => film.imdbID === id);
};
console.log(trovaFilmById(movies, "tt0167260"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("Esercizio-15");
function trovaFilmByYear(arrayFilms, anno) {
  const indiceFilm = arrayFilms.findIndex((film) => film.Year === anno.toString());
  return indiceFilm;
}
const annoCercato = "2002";
const indicePrimoFilmAnno = trovaFilmByYear(movies, annoCercato);
console.log(indicePrimoFilmAnno);
