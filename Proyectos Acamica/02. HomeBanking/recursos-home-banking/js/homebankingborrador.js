//Declaración de variables

var nombreUsuario = "Jorge"
var saldoCuenta = 30000;
var limiteExtraccion = 5000;
var actualizarSaldoEnPantalla;
var cargarNombreEnPantalla;
var monto = 0;
var montoDepositar = 0;
var montoExtraer = 0;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	nuevoLimiteExtraccion = prompt("Ingrese un nuevo limite de extracción: ");
	nuevoLimiteExtraccion = limiteExtraccion;
	parseInt(limiteExtraccion, 10);
	actualizarLimiteEnPantalla();
	alert("Tu nuevo limite de extracción es: " + limiteExtraccion);
}
}

function sumarDinero(monto){
	saldoCuenta += monto;
}

function restarDinero(monto){
	saldoCuenta -= monto;
}

function extraerDinero() {
	montoExtraer = prompt("Que cantidad de dinero deseas extraer?: ");
	monto = montoExtraer;
	parseInt(monto, 10);
	var saldoAnterior = saldoCuenta;
	sumarDinero(monto, saldoCuenta);
	actualizarSaldoEnPantalla();
	alert("Has depositado: " + monto + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
}

function depositarDinero() {
	montoDepositar = prompt("Que cantidad de dinero quieres depositar?: ");
	monto = montoDepositar;
	parseInt(monto, 10);
	var saldoAnterior = saldoCuenta;
	restarDinero(monto, saldoCuenta);
	actualizarSaldoEnPantalla();
	alert("Hiciste una extracción de: " + monto + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
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

