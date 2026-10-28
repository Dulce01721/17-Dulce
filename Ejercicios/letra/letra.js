function generarLetraE() {
    let matrizE = [
        ['E', 'E', 'E', 'E'],
        ['E', ' ', ' ', ' '],
        ['E', 'E', 'E', 'E'],
        ['E', ' ', ' ', ' '],
        ['E', 'E', 'E', 'E']
    ];

    let salida = "";

    for (let i = 0; i < matrizE.length; i++) {
        for (let j = 0; j < matrizE[i].length; j++) {
            salida += matrizE[i][j] + " ";
        }
        salida += "<br>"; 
    }
    document.getElementById("resultado").innerHTML = salida;
}