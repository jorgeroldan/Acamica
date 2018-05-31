console.log("Esto Funciona");

const botonClic = document.getElementById("boton");
let contador = 0;
const contendorResultado = document.getElementById('resultado');
let parrafoResultado = document.createElement('p');
contendorResultado.appendChild(parrafoResultado);


function sumaClic(){
    parrafoResultado.textContent = contador;
    if(contador === 0){
        timer();
        parrafoResultado.textContent = contador;
    }
    contador++;
}

function timer(){
    setTimeout(function () {
        console.log(contador);
    }, 10000);
}

botonClic.addEventListener('click', sumaClic);

