// Declaración de variables para usuario
var nombreUsuario = "Jorge Roldán"
var claveUsuario = 2018;

//Declaración de variables para funciones principales
var saldoCuenta = 100000;
var limiteExtraccion = 5000;
var montoDepositar = 0;
var restriccionSaldoCuenta = false;
var restriccionLimiteExtraccion = false;
var restriccionBilletes = false;
var montoExtraerFloat = 0;
var montoDepositarFloat = 0;
var montoExtraerTexto = 0;

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

// Declación de variables para transferencia
var cantidadTransferir = 0;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

// Declaración de variables de validación
var dato = 0;
var claveValidacion = false;
var statusReglaValidacion = 0;


// Ejecutar función para inicio de sesión
function login(){
	iniciarSesion();
	if (claveValidacion === true) {
		alert(nombreUsuario + ",  bienvenido/a ya puedes comenzar a realizar operaciones en tu HomeBanking");
	} 
	else {
		alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");
	}
// Ejecución de las funciones que actualizan los valores de las variables en el HTML
	cargarNombreEnPantalla();
	actualizarSaldoEnPantalla();
	actualizarLimiteEnPantalla();
}

// Funciones PASO 1
function sumarDinero(montoDepositar){
	saldoCuenta += parseFloat(montoDepositar);
}

function restarDinero(montoExtraer){
	saldoCuenta -= parseFloat(montoExtraer);
	// console.log("probando probando 123");
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	if (claveValidacion){
		nuevoLimiteExtraccion = prompt("Ingrese un nuevo limite de extracción: ");
	    if (claveValidacion === true && nuevoLimiteExtraccion != null){
	        limiteExtraccion = parseFloat(nuevoLimiteExtraccion);
	        actualizarLimiteEnPantalla();
	        alert("Tu nuevo limite de extracción es: $" + limiteExtraccion);
	    } 
	    else if (claveValidacion === false){
	        alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");
	    }
	} 
	else {
			alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");

	} 
}


//Extración respetando los limites de extracción, saldo en la cuenta y billetes de $100
function respetaSaldoCuenta(montoExtraer){
	return (montoExtraer <= saldoCuenta);
}

function respetaLimiteExtraccion(montoExtraer){
	return (montoExtraer <= limiteExtraccion);
}

function respetaBilletes100(montoExtraer){
	return (montoExtraer % 100 == 0);
}


function extraerDinero() {
		if (claveValidacion){
			montoExtraerTexto = prompt("Que cantidad de dinero quieres extraer?: ");
			if (reglaValidacion(montoExtraerTexto)){
			var montoExtraer = parseFloat(montoExtraerTexto);
			if (!respetaSaldoCuenta(montoExtraer)){
				alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero");	
			} else if (!respetaLimiteExtraccion(montoExtraer)){
				alert("Estas excediendo tu limite diario de extracción: " + "$" + limiteExtraccion);
			} else if (!respetaBilletes100(montoExtraer)){
				alert("Este cajero solamente puede entregar billetes de 100 pesos argentinos");	
			} else {
				var saldoAnterior = saldoCuenta;	
				restarDinero(montoExtraer);
				actualizarSaldoEnPantalla();
				alert("Hiciste una extracción de: $" + montoExtraer + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Saldo actual: $" + saldoCuenta);
			}
		} 
		
	}
	else {
			alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");

		}
}

function depositarDinero() {
		if (claveValidacion){
			montoDepositar = prompt("Que cantidad de dinero quieres depositar?: ");
			if (reglaValidacion(montoDepositar) ){
			var saldoAnterior = saldoCuenta;
			sumarDinero(montoDepositar);
			actualizarSaldoEnPantalla();
			alert("Hiciste un deposito de: $" + montoDepositar + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Saldo actual: $" + saldoCuenta);	
			}

		}
		else {
			alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");
			console.log('este console.log no debería salir, revisar')
		}
}


function pagarServicio() {
	if (claveValidacion){
		var servicioAPagar = parseInt(prompt("Ingrese el número que corresponde con el servicio que desea pagar: " + "\n 1. Agua" + "\n 2. Telefono" + "\n 3. Luz" + "\n 4. Internet"));
		if (reglaValidacion(servicioAPagar)){
		switch (parseInt(servicioAPagar)){
		case 1: alert ("El servicio de " + servicio1 + " tiene un costo de: $" + precioAgua)
		restarDinero(precioAgua);
		break;  
		case 2: alert ("El servicio de " + servicio2 + " tiene un costo de: $" + precioTelefono)
		restarDinero(precioTelefono);
		break; 
		case 3: alert ("El servicio de " + servicio3 + " tiene un costo de: $" + precioLuz)
		restarDinero(precioLuz);
		break; 
		case 4: alert ("El servicio de " + servicio4 + " tiene un costo de: $" + precioInternet)
		restarDinero(precioInternet);
		break;
		default: alert ("No existe ningún otro servicio asociado")
		break;  
	} 
		actualizarSaldoEnPantalla();
	}
	}
	else {
		alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");
	}
}

function transferirDinero() {
	if (claveValidacion){
		cantidadTransferir = prompt("Que cantidad de dinero quieres transferir?: ");
		var cantidadTransferir = parseFloat(cantidadTransferir);
		if (!respetaSaldoCuenta(cantidadTransferir)){
			alert("No hay saldo en tu cuenta para transferir esa cantidad de dinero");	
		} else {
			var cuentaDestino = prompt("Ingrese el número de la cuenta amiga a la que deseas transferir: " + "\n-Cuenta Amiga 1 es: " + cuentaAmiga1 + "\n-Cuenta Amiga 2 es: " + cuentaAmiga2);
			switch (parseInt(cuentaDestino)){
				case 1234567: alert ("El CBU de la cuenta amiga 1 es: " + cuentaAmiga1 + " y el monto a transferir es de: $" + cantidadTransferir)
				restarDinero(cantidadTransferir);
				break;
				case 7654321: alert ("El CBU de la cuenta amiga 2 es: " + cuentaAmiga2 + " y el monto a transferir es de: $" + cantidadTransferir)
				restarDinero(cantidadTransferir);
				break;
				default: alert ("Ese número de cuenta NO esta dada de alta como operación frecuente")
				break;
				}
				actualizarSaldoEnPantalla();
		}
	}
	else {
			alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");

	}
}


function agregarCuentaFrecuente(){

}

function iniciarSesion() {
	nombreUsuario = prompt("Ingresa tu nombre de usuario: ");
	var claveIngreso = prompt("Bienvenido/a " + nombreUsuario + "\n Por favor ingresa tu clave: ");
	var claveIngreso = parseInt(claveIngreso);
	if (claveIngreso === claveUsuario){
		return claveValidacion = true;
	}
	else {
		// alert("Código incorrecto, por motivos de seguridad deberás recargar la página e intentar de nuevo");
		saldoCuenta = 0;
		limiteExtraccion = 0;
		nombreUsuario = "USUARIO BLOQUEADO";
		return claveValidacion = false;
		console.log("estoy aqui pero no funciono");
	}
}

// Función para regla de validación
function reglaValidacion(dato){	
	if (isNaN(dato) || dato <= 0){
		alert ("Ojo, has ingresado un dato invalido!" + "\n" + "Solamente puedes ingresar números enteros");
		console.log("lalalalala datos que no pasan la regla");
		// statusReglaValidacion = false;
		return false;
	}
	else {
		// statusReglaValidacion = true;
		console.log("123 datos que si pasan la regla");
		return true;
	}
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

