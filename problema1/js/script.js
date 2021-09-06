let num1 = Math.floor(Math.random()*100);
let num2= Math.floor(Math.random()*10);
const multiplicar = document.querySelector('#calcular');

const multiplicacion=(a,b)=>{
    let resultado=0;
    for(let i = 1; i <= a; i++){
        resultado = resultado + b;  
    }
    borrarElementos();
    crearElementos(`${num1} x ${num2} = ${resultado}`);
}
const crearElementos= resultado =>{
    let nodo = document.createElement("p");
    let texto=document.createTextNode(`${resultado}`);
    nodo.classList.add("respuestas");
    nodo.appendChild(texto);
    document.body.appendChild(nodo);  
}
const borrarElementos=()=> {
    const $elemento = document.querySelectorAll('.respuestas');
    for (let i = 0; i < $elemento.length; i++) {
        $elemento[i].remove();
    }
}

multiplicar.addEventListener('click',()=>{multiplicacion(num1,num2)});

