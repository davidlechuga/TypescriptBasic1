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

var programas:Array<string> = [];

function guardar(){
    //en concreto le decimos que es un input con id = nombre
    var nombre = (<HTMLInputElement>document.getElementById("nombre"))

}