//Declaración de variables
var nombreUsuario = "Jorge"
var saldoCuenta = 30000;
var limiteExtraccion = 5000;
var montoDepositar = 0;
var montoExtraer = 0;



//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();


//Funciones PASO 1
function sumarDinero(montoDepositar){
	saldoCuenta += montoDepositar;
}

function restarDinero(montoExtraer){
	saldoCuenta -= montoExtraer;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	nuevoLimiteExtraccion = prompt("Ingrese un nuevo limite de extracción: ");
	limiteExtraccion = nuevoLimiteExtraccion;
	parseInt(limiteExtraccion, 10);
	actualizarLimiteEnPantalla();
	alert("Tu nuevo limite de extracción es: " + limiteExtraccion);
}

function extraerDinero() {
	montoExtraer = prompt("Que cantidad de dinero quieres extraer?: ");
	parseInt(montoExtraer, 10);
	var saldoAnterior = saldoCuenta;
	restarDinero(montoExtraer);
	actualizarSaldoEnPantalla();
	alert("Hiciste una extracción de: " + montoExtraer + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
}

function depositarDinero() {
	montoDepositar = prompt("Que cantidad de dinero quieres depositar?: ");
	parseInt(montoDepositar, 10);
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

