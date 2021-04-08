//Creamos la clase Coche, este es un molde del objeto y contiende las propiedad del objeto.
var Coche = /** @class */ (function () {
    // es en el contructor donde se le asignan valores a las propiedades del objeto
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW";
        }
        else {
            this.modelo = modelo;
        }
    }
    // getters and setters
    Coche.prototype.GetColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        return this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        return this.modelo;
    };
    //metodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
// creamos el objeto coche con " new "
var coche_uno = new Coche("renault");
var coche_dos = new Coche();
var coche_tres = new Coche();
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
