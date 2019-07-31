// alert("XD funcionaaaa!!!!")
// operadores aritmeticos + - * / % 
// operadores logicos && || !

// = asigna valores

// == compara que sean iguales pero no identicos

// let edad = prompt("Que edad tienes?");
// console.log(edad)

// if (edad == 180) {
//     console.log(edad)
//     console.log("Puedes manejar!!!")
// } else if(edad >= 15 && edad <= 17){
//     console.log("Puedes manejar pero con un permiso")
// }
// else{
//     console.log("lo siento pero no puedes manejar")
// }



// if(18 === "18"){
//     console.log(true)
// }else{
//     console.log(false)
// }

//j1 = piedra y j2 = piedra
//j1 = piedra y j2 = papel
//j1 = piedra y j2 = tijera
//j1 = papel y j2 = piedra
//j1 = papel y j2 = papel
//j1 = papel y j2 = tijera
//j1 = tijera y j2 = piedra
//j1 = tijera y j2 = papel
//j1 = tijera y j2 = tijera

let j1 = prompt("Elige piedra, papel o tijeras");

let j2 = prompt("Elige piedra, papel o tijeras");

let piedra = "piedra";
let papel = "papel";
let tijeras = "tijeras";

if(j1 === piedra && j2 === tijeras || j1 === papel && j2 === piedra || j1 === tijeras && j2 === papel){
    console.log("Gana jugador 1")
}else if ( j2 === piedra && j1 === tijeras || j2 === papel && j1 === piedra || j2 === tijeras && j1 === papel ){
    console.log("gana jugador 2")
}else{
    console.log("empate")
}

//challenge hacer vs la maquina