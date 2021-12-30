function iniciar() {
    $tabla = ("<table border=1 id='tabla'>");
    $("#principal").append($tabla);
    buscarNombreContinente();
    //buscarBandera();
}

function buscarNombreContinente() {
    $.getJSON("paises.json").done(function (paises) {
        $.each(paises.mundo.continentes, function () {
            if ($(this)[0].Nombre === "América" || $(this)[0].Nombre === "Oceania") {
                $celdaArriba = ("<td><h3>" + $(this)[0].Nombre + "</h3></td>");
                $("#tabla").append($celdaArriba);
            } else {
                $mensajeRojo = ($(this)[0].Nombre + " no esta actualizado.");
                $("#tabla").before($mensajeRojo);
                mensajecss();
            }
        })
    })

}
/*function buscarBandera() {
    $().append("<tr> <td colspan='2'>  </td> </tr>");
}*/
function mensajecss() {
    $("#mensajeRojo").css({
        "color": "red"
    });
}

$(iniciar);