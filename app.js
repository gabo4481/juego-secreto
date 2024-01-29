let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos== 1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if( numeroSecreto > numeroUsuario){
            asignarTextoElemento('p','el numero es mayor');
        } else {
            asignarTextoElemento('p','el numero es menor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosGenerados.length==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    }else{
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1",'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento("p",`elige un  umero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();   
    intentos = 1; 
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja()
    //indicar mensaje de inicio de intervalos
    //generar numero 
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();





