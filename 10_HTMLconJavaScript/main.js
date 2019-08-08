let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById('boton')
let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')
// console.log(titulo)
// titulo.innerHTML = 'Soy el titulo cambiado'
// parrafo.innerHTML = 'Que onda xd'

const cambiar = () => {

    // titulo.innerHTML = 'Soy el titulo cambiado'
    // parrafo.innerHTML = 'Que onda xd'

    let texto = input.value
    mostrar.innerHTML = texto
}

boton.addEventListener('click',cambiar)