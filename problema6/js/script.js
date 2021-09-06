let buton=document.getElementById('button');

        buton.addEventListener('click',()=>{
            let caja=document.getElementById('caja').value;
            let img=document.getElementById('img');
            let nombre=document.getElementById('nombre');
            let numero=document.getElementById('numero');
            let tipo=document.getElementById('tipo');
            let peso=document.getElementById('peso');
            let altura=document.getElementById('altura');

            let xhttp=new XMLHttpRequest()
            xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`);
            xhttp.send();

            xhttp.onreadystatechange=function () {
                if(this.readyState==4 && this.status==200)
                {
                let datoPokemon=JSON.parse( this.responseText);
                console.log(datoPokemon);
                img.setAttribute("src",datoPokemon.sprites.front_default);
                nombre.textContent=`Nombre: ${datoPokemon.name}`;
                numero.textContent=`Numero: ${datoPokemon.id}`;
                tipo.textContent=`Tipo: ${datoPokemon.types[0].type.name}`;
                peso.textContent=`Peso: ${datoPokemon.weight/10} kg`;
                altura.textContent=`Altura: ${datoPokemon.height/10} m`;
                }
            }

        })