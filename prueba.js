function holaMundo(nombre) {
    return "Hola Mundo !!  Soy" + nombre;
}
var nombre = "David Lechuga Huerta";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("Main__Container");
etiqueta.innerHTML = resultado;
//variables
var nombre = "Elizabeth Ortiz";
var edad = 55;
var programador = true;
var tags = [1, true, "Css"];
etiqueta.innerHTML = nombre + " - " + edad + " - " + programador + " - " + tags;
var a = 7;
var b = 2;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("dentro de if " + a_1 + " - " + b);
}
console.log("fuera de if  " + a + " - " + b);
// funciones 
function devulveNumber(numero) {
    return " numero devuleto " + numero;
}
function devulveString(texto) {
    if (texto === "Hola") {
        var numero = true;
    }
    else {
        var numero = false;
    }
    return numero;
}
alert(devulveNumber(34));
alert(devulveString("Hola"));
