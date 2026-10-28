function cotizar() {
    var matrizTarifas = [
        [120, 180, 280],
        [120, 280, 340],
        [240, 520, 890]
    ];

    var f = document.getElementById("puesto").selectedIndex;
    var c = document.getElementById("nivel").selectedIndex;
    var h = parseInt(document.getElementById("horas").value);

    if (h == "") {
        h = 0;
    }

    var resultadoFinal = matrizTarifas[f][c] * h;

    document.getElementById("resTotal").value = "$" + resultadoFinal;
}