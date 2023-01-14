/*condicional simple */

// let num1 = 0;
// let num2 = 5;


/*condicionales compuesta */

// if(numero > 0) {
//     console.log(`${numero} es mayor que 0`);
// }else{
//     console.log(`${numero} es menor que 0`);
// }




/*condicional multiple */

// if(numero > 0) {
//     console.log(`${numero} es mayor que 0`);
// }else if(numero < 0) {
//     console.log(`${numero} es menor que 0`);
// }else{
//     console.log(`${numero} es igual a 0`)
// }



/*operadores logicos */
/*&& and */
/*|| O */

let num1 = -5;
let num2 = 0;



if(num1 > 0){
    if(num2 > 0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es mayor que 0 y num 2 es menor que 0`);
    }else{
        console.log(`${num1} es mayor 0 y ${num2} es igual a 0`)
    }
}else if(num1 < 0){
    if(num2 > 0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`)
    }
}else{
    if(num2 > 0){
        console.log(`${num1} es igual que 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es igual a 0 ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son iguales a 0`)
    }
}






let word = 'kola';

if(word.length > 4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length < 4) {
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}






let respuesta = false;

if (respuesta == true) console.log(`Respuesta tiene el valor true`);
if (respuesta == false) console.log(`Respuesta tiene el valor false`);


if (respuesta ) console.log(`Respuesta tiene el valor true`);
if (!respuesta) console.log(`Respuesta tiene el valor false`);