let columnas = document.querySelector('#columnas');
let ingresar = document.querySelector('#ingresar');

function borrarElementos() {
    const $elemento = document.querySelectorAll('.conteiner');
    for (let i = 0; i < $elemento.length; i++) {
        $elemento[i].remove();
    }
}

const crearColumnas = (num) =>{
    borrarElementos()
    let conteiner = document.createElement('div');
    conteiner.className="conteiner";
    for(let i =0;i < num; i++){
        let imagen = document.createElement('img');
        imagen.className="img";
        imagen.src="./img/HrabinaBoca.jpg";
        conteiner.appendChild(imagen);
    }

    document.body.appendChild(conteiner);
}

ingresar.addEventListener('click',()=>{
    if(columnas.value<16){
    crearColumnas(columnas.value);
    }
});

