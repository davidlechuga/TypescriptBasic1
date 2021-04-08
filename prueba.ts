function holaMundo (nombre: string) {
    return "Hola Mundo !!  Soy" + nombre;
}

var nombre = "David Lechuga Huerta";
var resultado = holaMundo(nombre)
var etiqueta = <HTMLElement>document.getElementById("Main__Container");
etiqueta.innerHTML = resultado

//variables
var nombre: string = "Elizabeth Ortiz";
var edad:number = 55;
var programador: boolean = true;
var tags: Array<any> = [1, true, "Css"];

etiqueta.innerHTML = nombre + " - " + edad + " - " + programador + " - " + tags;

var a = 7;
var b = 2;

 if (a === 7 ) {
     let a = 4; 
     var b = 1;
    console.log("dentro de if " + a + " - " + b);
    
    }

console.log("fuera de if  " + a + " - " + b);

// funciones 

function devulveNumber(numero:number ): string {
    return " numero devuleto " + numero
}

function devulveString (texto: string):boolean {
    if (texto === "Hola" ) {
        var numero = true
    } else {
        var numero = false 
    }
    return numero
}



alert(devulveNumber(34))
alert(devulveString("Hola"))
 
