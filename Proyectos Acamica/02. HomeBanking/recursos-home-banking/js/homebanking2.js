//Declaración de variables
var nombreUsuario = "Jorge"
var saldoCuenta = 30000;
var limiteExtraccion = 5000;
var montoDepositar = 0;
var montoExtraer = 0;
var restriccionSaldoCuenta = false;
var restriccionLimiteExtraccion = false;
var restriccionBilletes = false;
var montoExtraerFloat = 0;
var montoDepositarFloat = 0;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();


//Funciones PASO 1
function sumarDinero(montoDepositar){
	saldoCuenta += parseFloat(montoDepositar);
	montoDepositar = montoDepositarFloat;
}

function restarDinero(montoExtraer){
	saldoCuenta -= parseFloat(montoExtraer);
	montoExtraer = montoExtraerFloat;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	nuevoLimiteExtraccion = prompt("Ingrese un nuevo limite de extracción: ");
	limiteExtraccion = nuevoLimiteExtraccion;
	actualizarLimiteEnPantalla();
	alert("Tu nuevo limite de extracción es: " + limiteExtraccion);
}

// Extracción sin restricciones

// function extraerDinero() {
// 		montoExtraer = prompt("Que cantidad de dinero quieres extraer?: ");
// 		var saldoAnterior = saldoCuenta;
// 		restarDinero(montoExtraer);
// 		actualizarSaldoEnPantalla();
// 		alert("Hiciste una extracción de: " + montoExtraer + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
// }


//Extración respetando los limites de extracción, saldo en la cuenta y billetes de $100


function respetaSaldoCuenta(){
	if (montoExtraerFloat < saldoCuenta){
		restriccionSaldoCuenta = true;
		console.log(restriccionSaldoCuenta)
	} else {
		restriccionSaldoCuenta = false;
		console.log(restriccionSaldoCuenta)
	}
}

function respetaLimiteExtraccion(){
	if (montoExtraerFloat < limiteExtraccion){
		restriccionLimiteExtraccion = true;
		console.log(restriccionLimiteExtraccion)
	} else {
		restriccionLimiteExtraccion = false;
		console.log(restriccionLimiteExtraccion)
	}
}

function respetaBilletes100(){
	if (montoExtraerFloat % 100 != 0){
		restriccionBilletes = true;
		console.log(restriccionBilletes)
	} else {
		restriccionBilletes = false;
		console.log(restriccionBilletes)
	}
}


function extraerDinero() {
	montoExtraer = prompt("Que cantidad de dinero quieres extraer?: ");
	if (restriccionSaldoCuenta = true){
		alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero");	
	} else if (restriccionLimiteExtraccion = true){
		alert("Estas excediendo tu limite diario de extracción: " + "$" + limiteExtraccion);
	} else if (respetaBilletes100 = true){
		alert("Este cajero solamente puede entregar billetes de 100 pesos argentinos");	
	} else (restriccionSaldoCuenta = true) && (restriccionLimiteExtraccion = true) && (respetaBilletes100 = true){
		var saldoAnterior = saldoCuenta;	
		restarDinero(montoExtraer);
		actualizarSaldoEnPantalla();
		alert("Hiciste una extracción de: " + montoExtraer + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
	}
}
			

function depositarDinero() {
	montoDepositar = prompt("Que cantidad de dinero quieres depositar?: ");
	var saldoAnterior = saldoCuenta;
	sumarDinero(montoDepositar);
	actualizarSaldoEnPantalla();
	alert("Hiciste un deposito de: " + montoDepositar + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
}


function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

