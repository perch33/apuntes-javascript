/* Bucles */

/* 
    Determinados
    bucle for
    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento
    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/


/*
if(i != 5){
        console.log(i);
    };
imprime todos los numeros menos el 5 */

let numbers = [56,14,23,37,41,59];


for(let i = 0; i <= numbers.length-1; i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
};