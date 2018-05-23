var persona = {
	nombre: "Jose",
	apellido:"",
	edad: 28,
	barrio: "zona oeste",
	lugarDeNacimiento: "Caracas, Venezuela",
	trabajo: true,
	lugarTrabajo: "Freelance",
	Hobbie:"tocar la guitarra"
};


function Persona(nombre, apellido, edad, barrio, lugarDeNacimiento, trabajo, lugarTrabajo, Hobbie){
		this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._barrio = barrio;
        this._lugarDeNacimiento = lugarDeNacimiento;
        this._trabajo = trabajo;
        this._lugarTabajo = lugarTrabajo;
        this._Hobbie = Hobbie;
};

var persona1 = new Persona("Jose", '', 28, "zona oeste", "Caracas", true, "Venezuela", "Freelance", "tocar la guitarra);