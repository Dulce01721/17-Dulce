function calcularEstadisticas() {
    let arreglo = new Array(7);
    let suma = 0;

    for (let i = 0; i < 7; i++) {
        let valor = document.getElementById("d" + i).value;
        arreglo[i] = parseFloat(valor);
        suma += arreglo[i];
    }

    let min = Math.min(...arreglo);
    let max = Math.max(...arreglo);
    let prom = suma / 7;

    document.getElementById("impLista").innerText = "Números capturados: " + arreglo;
    document.getElementById("impPromedio").innerText = "Promedio: " + prom;
    document.getElementById("impMax").innerText = "Máximo: " + max;
    document.getElementById("impMin").innerText = "Mínimo: " + min;
}