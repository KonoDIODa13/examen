class Genero {
    nombre;

    constructor(n) {
        this.nombre = n;
    }
}
class Pelicula extends Genero {

    titulo;
    descripcion;
    trailer;
    constructor(titulo, desc, trailer, n) {
        super(n);
        this.titulo = titulo;
        this.descripcion = desc;
        this.trailer = trailer;
    }
    get descripcion() {
        return this.descripcion;
    }

}
window.onload = function () {
    var duracion = prompt("Mínima duración de las películas");
    buscarPeli();

}
function buscarPeli() {
    peticionXML = new XMLHttpRequest()
    peticionXML.addEventListener("readystatechange", () => {
        if (peticionXML.readyState == 4 && peticionXML.status == 200) {
            var datos = peticionXML.responseXML;
            var peliculas = datos.querySelector("root").querySelectorALL("pelicula");
            var long = peliculas.lenght;
            var titulo = "";
            var id = "";
            var trailer = "";
            var descripcion = "";
            var duracionP = "";
            for (var i = 0; i < long; i++) {
                id = peliculas[i].querySelector("id").textContent;
                titulo = "pelicula: " + peliculas[i].querySelector("titulo").textContent;
                trailer = peliculas[i].querySelector("trailer").querySelector("src").textContent;
                descripcion = "descripcion " + peliculas[i].querySelector("descripcion").textContet;
                duracionP = peliculas[i].querySelector("duracion").textContent;
                arrPelis = (titulo, trailer, descripcion, duracion, buscarGenero(id, datos))
            }
            var div = document.body.createElement("div");
            div.setAtributte(id, "principal");
            var parrafo = document.createElement("p");

            if (arrPelis[3] < duracion) {
                for (var i = 0; i < l; i++) {
                    parrafo.textContent = "<h1>" + arrPelis[0] + "</h1>" + arrPelis[4] + "<br>" + arrPelis[1] + "<br>" + arrPelis[2];
                }
            }
        }

    })
    peticionXML.open("POST", "peliculas.xml")
    peticionXML.send()
}
function buscarGenero(id, datos) {
    var genero = datos.querySelector("genero");
    var peliculaGenero = datos.querySelector("pelicula_genero");
    for (var i = 0; i < l; i++)
        if (peliculaGenero[i].querySelector("peliculaId") === id || genero[i].querySelector("id") === peliculaGenero[i].querySelector("generoId")) {
            var p = createElement("<p>");
            p.textContent = "Genero:" + genero[i].querySelector("nombre");
        }
}
