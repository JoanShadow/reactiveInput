function holaMundo() {
	return "Hola Mundo!! Soy " + nombre;
}

let nombre = "Joan Pérez";
var resultado = holaMundo();

var etiqueta = <HTMLElement>document.getElementById("container");

// Variables y tipos
var username:string = "ShadowLights";
var edad:number = 23;
var programador:boolean = true;
var langs: Array<string> = ["JavaScript", "HTML5",
 "CSS3", "JAVA", "PHP", "XML", "JSON"];

etiqueta.innerHTML = resultado + "<br>" + username + " | " + edad;

var a = 3;
var b = 9;

if(a === 3) {
	let a = 7;
	var b = 1;

	console.log("in to the if: "+ a + " - " + b);
}

console.log("out to the if: "+ a + " - " + b);

function devuelveNumero(num:number) {
	return "Número devuelto: " + num;
}

function devuelveTexto(txt:string) {
	if (txt == "hola") {
		var num = true;
	} else {
		var num = false;
	}
	return "Texto devuleto: " + num;
}

console.log(devuelveNumero(23));
console.log(devuelveTexto("hola"));



