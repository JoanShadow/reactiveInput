interface CocheBase{
	getModelo():string;
	getVelocidad():number;

}

class Coche implements CocheBase{
	public color:string;
	public modelo:string;
	public velocidad:number;

// Model constructor
	constructor(modelo:any = null) {
		this.color = "white";
		this.velocidad = 0;

		if(modelo == null) {
			this.modelo = "Default model";
		} else {
			this.modelo = modelo; 
		}
	}
	
// Color getter and setter
	public getColor() {
		return this.color;
	}

	public setColor(color:string) {
		this.color = color;
	}

// Speed
	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}

	public getVelocidad():number {
		return this.velocidad;
	}

// Model getter and setter
	public getModelo():string {
		return this.modelo;
	}

	public setModelo(modelo:string) {
		this.modelo = modelo;
	}

}

var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("red");
coche2.setColor("blue");
coche3.setColor("green");

coche.acelerar();
coche.acelerar();
coche.acelerar();
coche2.acelerar();
coche3.frenar();

console.log("It car 1 color is " + coche.getColor());
console.log("It car 2 color is " + coche2.getColor());
console.log("It car 3 color is " + coche3.getColor());

console.log("It car 1 speed: " + coche.getVelocidad());
console.log("It car 2 speed: " + coche2.getVelocidad());
console.log("It car 3 speed: " + coche3.getVelocidad());

coche.frenar();
console.log("Coche 1 después de frenar: " + coche.getVelocidad());