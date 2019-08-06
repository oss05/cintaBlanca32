// for(let i = 50; i >= 0; i++){
//     console.log(i)
// }


// empiece en 0 y vaya a 549 de 3 en 3

// empiece en 10 y vaya a -1305 de 10 en 10

// empiece en -200 y vaya a 200 de 1 en 1

// for(let i = 0; i <= 549; i = i + 3){
//     console.log(i)
// }

// for(let i = 10; i >= -1310; i = i - 10){
//     console.log(i)
// }

// for(let i = - 200; i <= 200; i++ ){
//     console.log(i)
// }

// for(let perrito = 1 ; perrito <= 100; perrito++){
//     if(perrito % 2 === 0){
//         console.log(perrito + " es par")
//     }else{
//         console.error(perrito + "es impar")
//     }
// }

// for(let i = 1; i <= 100; i++){
//     if(i %3 ===0 && i % 5 ===0 ){
//         console.log( i + ' FizzBuzz')        
//     }else if( i % 5 ===0){
//         console.log( i + ' Buzz')
//     }else if(i %3 ===0){
//         console.log( i + ' Fizz')
//     }else{
//         console.log(i)
//     }

// }

let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(array)
for(let i = 0; i <= array.length; i++){
    console.log(array[i])
}

//Van a hacer un arreglo de 10 palabras y recorrerlo con un For

//Hacer las tablas de multipliar del 1 al 10
//1 x 1 = 1
// 1 x 2 = 2 ...
//10 x 10 = 100

//Hackear la NASA ez pz

for(let i = 1; i <=10; i++){
    for(let k = 1; k <=10; k++){
        console.log(i + " x " + k + " = "+ i*k)
    }
}