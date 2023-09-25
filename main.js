let tarjetasDestapadas=0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado=null;
let segundoResultado=null;

let movimientos=0;
let aciertos=0;

let timer=30;
let temporizador=false;
let tiempoRegresivo=null;

let movimientosElement=document.getElementById("movimientos");

let mostrarTiempo = document.getElementById("t-restante");
//generaicon de numeros aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers=numbers.sort(()=>Math.random()-0.5);

//funcion para cuando acabe elt iempo
function bloquearTarjetas(){
    for(let i=0;i<=15;i++){
        let tarjetaBloqueada=document.getElementById(i);
        tarjetaBloqueada.innerHTML=numbers[i];
        tarjetaBloqueada.disabled=true;
    }
}
//function para contar el tiempo
function contarTiempo(){
    
    tiempoRegresivo = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML="Tiempo: "+timer +" segundos";
        if(timer==0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
            //alert("Perdiste");
        }
    },1000);
}



function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }


   tarjetasDestapadas++;
   console.log(tarjetasDestapadas);

   if(tarjetasDestapadas==1){
    //mostrar primer numero
    tarjeta1=document.getElementById(id);
    primerResultado= numbers[id];
    tarjeta1.innerHTML=primerResultado;

    //deshabilitar primer boton
    tarjeta1.disabled=true;
   }
   else if(tarjetasDestapadas==2){


    //mostrar segundo numero
    tarjeta2=document.getElementById(id);
    segundoResultado= numbers[id];
    tarjeta2.innerHTML=segundoResultado;

    //deshabilitar segundo boton
    tarjeta2.disabled=true;

    //comparar resultados
    if(primerResultado==segundoResultado){
        tarjeta1.style.backgroundColor="green";
        tarjeta2.style.backgroundColor="green";
        aciertos++;
        let aciertosElement=document.getElementById("aciertos");
        aciertosElement.innerHTML="Aciertos: "+aciertos;

        if(aciertos==8){
            clearInterval(tiempoRegresivo);
            mostrarTiempo.innerHTML="Fantastico! solo demoraste "+(30-timer)+" segundos";
        }
    }else{
        setTimeout(()=>{
            tarjeta1.innerHTML="";
            tarjeta2.innerHTML="";
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
        },100);
    }
    tarjetasDestapadas=0;
    movimientos++;
    movimientosElement.innerHTML="Movimientos: "+movimientos;
   }


}