//Condicion if
//operadores aritmeticos
// + - * / 
// %  < > ===

let numMAyor = 100
let numMenor = 5


// if( numMAyor < numMenor  ){
//         console.log('Es correcto')
// }else{
//     console.log('Es incorrecto')
// }


// if(10 === '10'){
//     console.log('Son iguales')
// }else{
//     console.log('Son diferentes')
// }

// let password = prompt('Que onda loco xd')
let perrito = 'perritoSalcicha123'


// if(password === perrito){
//     console.log('Tienes acceso')
// }else{
//     console.log('Abrete')
// }4

//And && - or ||

let edad = prompt('Ingreesa tu edad')

if (edad <= 15) {
    console.log('No puedes conducir')
} else if (edad == 16 || edad == 17) {
    console.log('Puedes sacar tu permiso')
} else {
    console.log('Puedes conducir')
}