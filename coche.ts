//interface  definir metodos va a tener una clase y utilizar metodos en forma concreta en una clase
interface cocheBase {
    //metodos
    getModelo (): string;
    getVelocidad(): number;
}

//Creamos la clase Coche, este es un molde del objeto y contiende las propiedad del objeto.
class Coche implements cocheBase {
    public color: string;
    public modelo: string;
    public velocidad: number;

// es en el contructor donde se le asignan valores a las propiedades del objeto

    constructor(modelo:any = null){
        this.velocidad = 0;
        this.color = "Blanco";

        if ( modelo == null ) {
            this.modelo = "BMW"
        } else {
            this.modelo = modelo;
        }
    }

    // getters and setters
    public GetColor() {
        return this.color
    } 
    public setColor(color:string) {
        return this.color = color
    }

    public getModelo() {
        return this.modelo
    }
    public setModelo(modelo:string) {
        return this.modelo
    }

    //metodos
    public acelerar() {
        this.velocidad ++;
    }
    public frenar() {
        this.velocidad --;
    }
    public getVelocidad():number {
        return this.velocidad
    }
}

// creamos el objeto coche con " new "
var coche_uno = new Coche ("renault");
var coche_dos = new Coche ();
var coche_tres = new Coche ();

// coche_uno.setColor("ROJO");
coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();


// coche_dos.setColor("BLANCO");
// coche_tres.setColor("NEGRO");


console.log("El color del coche 1 es : " + coche_uno.getModelo());
console.log("El color del coche 1 es : " + coche_uno.GetColor());
console.log("La velocidad del coche 1 es : " + coche_uno.getVelocidad());

coche_uno.frenar();
console.log("La velocidad del coche 1 es : " + coche_uno.getVelocidad());

// console.log("El color del coche 2 es : " + coche_dos.GetColor());
// console.log("El color del coche 3 es : " + coche_tres.GetColor());

