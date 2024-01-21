    let na=0;
    let contador=1;
    let palabraVez="";
    let Nusado=[];
    let numeroMaximo=10;

    function asignarTextoElemento(obj,name){
        let titulo= document.querySelector(obj);
        titulo.innerHTML=name;
    }

    function intentoDeusuario(){
        numeroUsuario = parseInt(document.getElementById('entrada').value); 
        if(numeroUsuario === na){
          asignarTextoElemento("p",`Acertaste con el numero Aleatorio, en: ${contador} ${(contador === 1) ? palabraVez="vez" :palabraVez="veces"}`);
          document.getElementById("reiniciar").removeAttribute("disabled");
        }else{
            if(numeroUsuario<na){
                asignarTextoElemento("p","Fallaste el numero aleatorio es mayor");
            }else{
                asignarTextoElemento("p","Fallaste el numero aleatorio es menor");
            }
            contador++;
            limpiarCaja();
        }
    }
    
    function condicionesIniciales() {
        asignarTextoElemento("h1","Juego Adivinador");
        asignarTextoElemento("p",`Ingresa un valor, del 1 al ${numeroMaximo} por favor:`);
        na=numeroAleatorio();
        document.querySelector("#reiniciar").setAttribute("disabled","true");

    }
    function reiniciarJuego() {
        limpiarCaja();
        condicionesIniciales();
    }
    function limpiarCaja(){
        document.querySelector(`#entrada`).value="";
    }
    function numeroAleatorio(){
     let aux = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(aux);
     console.log(Nusado);
     if(Nusado.length === numeroMaximo){
        asignarTextoElemento("p",`Ya sorteaste todos los numeros posibles `);
     }else{
     if(Nusado.includes(aux)){
       return numeroAleatorio();
     }else{
        Nusado.push(aux);
        return aux;
     }
    }
    }
    condicionesIniciales();
    

    