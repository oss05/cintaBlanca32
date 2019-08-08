let nombre = document.getElementById('nombre')
let correo = document.getElementById('correo')
let pizza = document.getElementById('pizza')

let Mnombre = document.getElementById('mostrarNombre')
let Mcorreo = document.getElementById('mostrarCorreo')
let Mpizza = document.getElementById('mostrarPizza')

let boton = document.getElementById('boton')

const mostrar = () =>{

    let textoNombre = nombre.value
    let textoCorreo = correo.value
    let textoPizza = pizza.value

    Mnombre.innerHTML = textoNombre
    Mcorreo.innerHTML = textoCorreo
    Mpizza.innerHTML = textoPizza

}

boton.addEventListener('click',mostrar)