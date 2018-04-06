//Declaración de variables para funciones principales
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

// Declaración de variables para pago de servicios
var servicioAPagar = 0;
var servicio1 = "Agua";
var servicio2 = "Telefono";
var servicio3 = "Luz";
var servicio4 = "Internet";
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();


//Funciones PASO 1
function sumarDinero(montoDepositar){
	saldoCuenta += parseFloat(montoDepositar);
}

function restarDinero(montoExtraer){
	saldoCuenta -= parseFloat(montoExtraer);
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	nuevoLimiteExtraccion = prompt("Ingrese un nuevo limite de extracción: ");
	limiteExtraccion = parseFloat(nuevoLimiteExtraccion);
	actualizarLimiteEnPantalla();
	alert("Tu nuevo limite de extracción es: " + limiteExtraccion);
}


//Extración respetando los limites de extracción, saldo en la cuenta y billetes de $100
function extraerDinero() {
	montoExtraer = prompt("Que cantidad de dinero quieres extraer?: ");
	montoExtraerFloat = parseFloat(montoExtraer);
	function respetaSaldoCuenta();
	function espetaLimiteExtraccion();
	function respetaBilletes100();
	if (restriccionSaldoCuenta == true){
		alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero");	
	} else if (restriccionLimiteExtraccion == true){
		alert("Estas excediendo tu limite diario de extracción: " + "$" + limiteExtraccion);
	} else if (restriccionBilletes == true){
		alert("Este cajero solamente puede entregar billetes de 100 pesos argentinos");	
	} else if (restriccionSaldoCuenta === true) && (restriccionLimiteExtraccion === true) && (respetaBilletes100 === true){
		var saldoAnterior = saldoCuenta;	
		restarDinero(montoExtraer);
		actualizarSaldoEnPantalla();
		alert("Hiciste una extracción de: " + montoExtraer + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
	} else {
		alert("Ojo");	

	}
}


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

function depositarDinero() {
	montoDepositar = prompt("Que cantidad de dinero quieres depositar?: ");
	var saldoAnterior = saldoCuenta;
	sumarDinero(montoDepositar);
	actualizarSaldoEnPantalla();
	alert("Hiciste un deposito de: " + montoDepositar + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
}


function pagarServicio() {
	var servicioAPagar = prompt("Ingrese el número que corresponde con el servicio que desea pagar: " + "\n 1. Agua" + "\n 2. Telefono" + "\n 3. Luz" + "\n 4. Internet" );
	console.log(servicioAPagar);
	switch (parseInt(servicioAPagar)){
		case 1: mostrarTexto ("El servicio de" + servicio1 + "tiene un costo de: " + precioAgua)
		break;  
		case 2: mostrarTexto ("El servicio de" + servicio2 + "tiene un costo de: " + precioTelefono)
		break; 
		case 3: mostrarTexto ("El servicio de" + servicio3 + "tiene un costo de: " + precioLuz)
		break; 
		case 4: mostrarTexto ("El servicio de" + servicio4 + "tiene un costo de: " + precioInternet)
		break;
		default: mostrarTexto ("No existe ningún otro servicio asociado")
		break;  
	} 
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

