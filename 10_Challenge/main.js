// let nombre = document.getElementById('nombre')
// let correo = document.getElementById('correo')
// let pizza = document.getElementById('pizza')

// let Mnombre = document.getElementById('mostrarNombre')
// let Mcorreo = document.getElementById('mostrarCorreo')
// let Mpizza = document.getElementById('mostrarPizza')

// let boton = document.getElementById('boton')

// const mostrar = () =>{

//     let textoNombre = nombre.value
//     let textoCorreo = correo.value
//     let textoPizza = pizza.value

//     Mnombre.innerHTML = textoNombre
//     Mcorreo.innerHTML = textoCorreo
//     Mpizza.innerHTML = textoPizza

// }

// boton.addEventListener('click',mostrar)

//Si el usuario pone SI al la piña, debe mostarse 'D:' por el contrario si pone NO -> ':D'
// Ahora vamos a utilizar Boostrap , el resultado aparecera en una tarjeta

//inputs
let nombre = document.getElementById('nombre')
let correo = document.getElementById('correo')
let pizza = document.getElementById('pizza')
//mostrar
let Mnombre = document.getElementById('Mnombre')
let Mcorreo = document.getElementById('Mcorreo')
let Mpizza = document.getElementById('Mpizza')
//boton
let boton = document.getElementById('boton')
//imagenes
let con = document.getElementById('con')
let sin = document.getElementById('sin')

const mostrar = () =>{
    
    let textoNombre = nombre.value
    let textoCorreo = correo.value
    let textoPizza = pizza.value
    let cambiarPizaa = textoPizza.toUpperCase()

    Mcorreo.innerHTML = textoCorreo
    Mnombre.innerHTML = textoNombre


    if(cambiarPizaa === 'SI'){
        con.classList.remove('desaparecer')
    }else if(cambiarPizaa === 'NO'){
        sin.classList.remove('desaparecer')
    }else{
        Mpizza.innerHTML = 'No se entendio la respuesta'
    }

}

boton.addEventListener('click',mostrar)