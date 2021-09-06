let cantidad=document.querySelector('#cantidad');
let numeros=document.querySelector('#numeros');
let mayor1000=document.querySelector('#mayor1000');
let mayor=document.querySelector('#mayor');
let menor=document.querySelector('#menor');
let porcentajes=document.querySelector('#porcentajes');
let calcular=document.querySelector('#calcular');

const cantidadElementos = (array) =>{
    cantidad.textContent= `Cantidad de elementos del arreglo: ${array.length}`;
}
const paresImpares = (array) =>{
    let pares = 0;
    let impares = 0;
    let cantidadDeElementos = array.length;
    let porcentajePares;
    let porcentajeImpares;
    let mensaje='';

    for(let i = 0; i<cantidadDeElementos; i++){
        if(array[i] % 2 == 0){
            pares++;
        }
        else{
            impares++;
        }
    }
    porcentajePares = Math.round(pares * 100 / cantidadDeElementos);
    porcentajeImpares = Math.round(impares * 100 / cantidadDeElementos);
    mensaje= `Porcentaje de pares: ${porcentajePares} % y Porcentaje de impares: ${porcentajeImpares}%`
    numeros.textContent= mensaje;
}

const mayoresDe1000 = (array) =>{
    let contador = 0;
    let porcentajeTotal;
    let cantidadDeElementos = array.length;
    let mensaje ='';

    for(let i = 0; i<cantidadDeElementos; i++){
        if(array[i] > 1000){
            contador++;
        }
    }
    porcentajeTotal= Math.round(contador * 100 / cantidadDeElementos);
    mensaje = `Porcentaje de numeros mayores a 1000: ${porcentajeTotal} %`;
    mayor1000.textContent = mensaje;
}

const numMayor = (array) =>{
    let numMayor = array[0];
    let cantidadDeElementos = array.length;
    let mensaje ='';

    for(let i = 0; i<cantidadDeElementos; i++){
        if(array[i] > numMayor){
            numMayor = array[i];
        }
    }
    mensaje = `El numero mayor es: ${numMayor}`;
    mayor.textContent = mensaje;
    return numMayor;
    
}

const numMenor = (array) =>{
    let numMenor = array[0];
    let cantidadDeElementos = array.length;
    let mensaje='';

    for(let i = 0; i<cantidadDeElementos; i++){
        if(array[i] < numMenor){
            numMenor = array[i];
        }
    }
    mensaje = `El numero menor es: ${numMenor}`;
    menor.textContent = mensaje;
    return numMenor;
}

const porcentajeDelMayor = (array) =>{
    let maximo = numMayor(array);
    let minimo = numMenor(array);
    let cantidadDeElementos = array.length;
    let sumaTotal=0;
    let promedio;
    let porcentajeDelMinimo;
    let porcentajeDelPromedio;
    let mensaje='';
    for(let i = 0; i<cantidadDeElementos; i++){
        sumaTotal += array[i];
    }
    promedio = Math.round(sumaTotal / cantidadDeElementos);
    porcentajeDelMinimo = Math.round(minimo * 100 / maximo);
    porcentajeDelPromedio = Math.round(promedio * 100 / maximo);
mensaje=`El promedio de la suma de todos los elementos es: ${promedio}. <br>
        El porcentaje del minimo es: ${porcentajeDelMinimo}. <br>
        El porcentaje del promedio es: ${porcentajeDelPromedio}.
`;
porcentajes.innerHTML= mensaje;
    
}

const mostrarResultados = (array)=>{
    cantidadElementos(array);
    paresImpares(array);
    mayoresDe1000(array);
    numMayor(array);
    numMenor(array);
    porcentajeDelMayor(array);
}

calcular.addEventListener('click',()=>{mostrarResultados([100,500,1500,37,171,45,99,21,54,1389])});





