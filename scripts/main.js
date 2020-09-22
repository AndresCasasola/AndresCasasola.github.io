
const title = document.querySelector('h1');
title.textContent = 'Hola que tal';


// document.querySelector('html').onclick = function()
// {
//     alert('¡Ouch! ¡Deja de pincharme!');
// }

let boton = document.querySelector('button');

boton.onclick = function() {
    estableceNombreUsuario();
}

fartscroll(200);

// Functions:

function multiplica(num1,num2)
{
    let resultado = num1 * num2;
    return resultado;
}

function estableceNombreUsuario()
{
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    title.textContent = miNombre;
}