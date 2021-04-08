// Uso de modulos,  un módulo sirve para encapsular código y distribuye la lógica de una aplicación en partes estancas, reutilizables y articulables.
module Tienda {
    export class Ropa {
        constructor(public titulo: string){
            alert(titulo)
        }
    }

    export class Informatica {
        constructor(public titulo: string){
            alert('Tienda de tecnología ' + titulo)
        }
    }
}

import Informatica = Tienda.Informatica;
let carga_informatica = new Informatica('supertienda')



// creacion de un decorador nos permite añadir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, métodos, parámetros y accesors.
function arranque(lanzar:string) {
    return function(target:Function) {
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
            
        }
    }
}

@arranque('mi primer lanzamiento')

class Programa  {
    //propiedades
    public nombre:string;
    public version:number;
    //seter and getters
    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version = version;
    }

}

var programa = new Programa(); 
programa.lanzamiento();

// Heredamos las propiedades de la clase Programa a la clase hija EditorVideo
class EditorVideo extends Programa {
    //Propiedades
    public timeline:number;

    //setter and getters
    getTimeLine(){
        return this.timeline;
    }

    setTimeLine(timeline:number){
        this.timeline = timeline;
    }
    //observamos como si heredo las propiedades.
    getAllData():string {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine()
    }

}

// Creamos una instancia de la clase EditorVideo
var editor = new EditorVideo();

editor.setNombre("Ghibli");
editor.setVersion(8)
editor.setTimeLine(4000)


console.log(editor.getAllData());


//Logica del Formulario

var programas:Array<any> = [];

function guardar(){
    //en concreto le decimos que es un input con id = nombre
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa(); 
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);

    var list = "";

    for (var i  = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML  = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";
}

setInterval( () => {
    console.log("Hola");
}, 1000)

var frutas = [
    "manzana",
    "naranja",
    "platano"
]

var recorrer = frutas.map(fruta => {
    console.log(fruta);
    console.log(fruta.length);
})

