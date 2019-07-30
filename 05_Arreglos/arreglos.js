let numero = 10
//Variable arreglo

// let array = ['Hola', 'Como estas', 'Que onda', 10 , 400, true, false]

// console.log(array)
// console.log(array[3])

let frutas = ['mango', 'sandia', 'fresa' , 'piña', 'manzana']

// console.log(frutas)

// frutas[5] = 'uva'
// frutas[2] = 'platano'

// console.log(frutas)console.log(frutas)

// frutas[5] = 'uva'
// frutas[2] = 'platano'

// console.log(frutas)

//Suma un elemento al arreglo

frutas.push('melon')
// console.log(frutas)
//Crear un arreglo de musica, con 5 elemento y sumar 3

let musica = []

musica.push('Reggeton','pop','kpop')

//Borra el ultimo elemento de un arreglo
// musica.pop()
//Borra el elemento que le indique
musica.splice(1,1)

// console.log(musica)

// let object = {
//     ciudad : 'CDMX',
//     delegacion : 'Azcapo',
//     telfono : '48745131'
// }

// console.log(object.ciudad)

let persona = {
    nombre : 'Ricardo',
    direccion : 'Rosario',
    telfono: '7845161',
    libros : ['la biblia', 'hp', 'LR', 'asgdushfj'],
    peiculas: {
        terror:['anabelle', 'It', 'El exorcismo'],
        accion:['Soldado', 'Guerra', 'No se mas xd'],
        comedia:{
            usa: ['This is my son','Superman'],
            mexicana:['Nacho Libre', 'Frida', 'Nosotros lo N']
        }
    },
    deportes: 'MMA'
}

console.log(persona.peiculas.comedia.mexicana[2])