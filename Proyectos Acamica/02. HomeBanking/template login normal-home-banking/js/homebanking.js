// Declaración de variables para usuario
var nombreUsuario = "roldan21@gmail.com"
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
var cuentasAmigas = [1234567, 7654321]

// Declaración de variables de validación
var dato = 0;
var claveValidacion = false;
var statusReglaValidacion = 0;
var input = claveValidacion;


// Ejecutar función para inicio de sesión
function login(){
	iniciarSesion();
	showWelcomeUser();
	showLoginButton();
	showHomebanking()
	showCard()
	showAvatar()
	if (claveValidacion) {
		// alert("Bienvenido/a " + nombreUsuario + ", ya puedes comenzar a realizar operaciones en tu HomeBanking");
		document.getElementById("myButton").onclick = function () {
        location.href = "#logo";
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
			var cuentaDestino = prompt("Ingrese el número de la cuenta amiga a la que deseas transferir: " + "\n-Cuenta Amiga 1 es: " + cuentasAmigas[0] + "\n-Cuenta Amiga 2 es: " + cuentasAmigas[1]);
			switch (parseInt(cuentaDestino)){
				case 1234567: alert ("El CBU de la cuenta amiga 1 es: " + cuentasAmigas[0] + " y el monto a transferir es de: $" + cantidadTransferir)
				restarDinero(cantidadTransferir);
				break;
				case 7654321: alert ("El CBU de la cuenta amiga 2 es: " + cuentasAmigas[1] + " y el monto a transferir es de: $" + cantidadTransferir)
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
	if (claveValidacion){
		var cuentaAmigaNueva = " ";
		if (claveValidacion){
			for (var i=0; i < cuentasAmigas.length;i++){
				cuentaAmigaNueva += cuentasAmigas[i];
			}
				cuentaAmigaNueva = prompt("Deseas dar de alguna una nueva cuenta frecuente?")	
				
			}
			else {
		}
	}	
	else {
		alert("No puedes realizar operaciones tu cuenta ha sido bloqueada, intenta ingresar de nuevo");
	}
}


function iniciarSesion() {
	nombreUsuario = prompt("Ingresa tu nombre de usuario: ");
	var claveIngreso = prompt("Hola " + nombreUsuario +"," + "\nPor favor ingresa tu clave: ");
	var claveIngreso = parseInt(claveIngreso);
	if (claveIngreso === claveUsuario){
		return claveValidacion = true;
	}
	else {
		saldoCuenta = 0;
		limiteExtraccion = 0;
		nombreUsuario = "USUARIO BLOQUEADO";
		return claveValidacion = false;
	}
}

// Función para regla de validación
function reglaValidacion(dato){	
	if (isNaN(dato) || dato <= 0){
		alert ("Ojo, has ingresado un dato invalido!" + "\n" + "Solamente puedes ingresar números enteros");
		return false;
	}
	else {
		return true;
	}
}

//Funciones antes y después de login
function showWelcomeUser(){
    var verNombre = document.getElementById("nombre");
    if (verNombre.style.display === 'none') {
        verNombre.style.display = 'block';
    } else {
        verNombre.style.display = 'none';
    }
}

function showAvatar(){
    var verAvatar = document.getElementById("icono");
    if (verAvatar.style.display === 'none') {
        verAvatar.style.display = 'block';
    } else {
        verAvatar.style.display = 'none';
    }
}

function showLoginButton(){
    var verLogin = document.getElementById("login");
    if (verLogin.style.display === 'none') {
        verLogin.style.display = 'block';
    } else {
        verLogin.style.display = 'none';
    }
}

function showHomebanking(){
    var verHomebanking = document.getElementById("homebanking");
    if (verHomebanking.style.display === 'none') {
        verHomebanking.style.display = 'block';
    } else {
        verHomebanking.style.display = 'none';
    }
}

function showCard(){
    var verCard = document.getElementById("card");
    if (verCard.style.display === 'block') {
        verCard.style.display = 'none';
    } else {
        verCard.style.display = 'block';
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

