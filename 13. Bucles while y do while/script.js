/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código
    Bucle while
    while(condición){
        //código a ejecutar
    }    
    Bucle do...while
    do{
        //código a ejecutar
    }while(condición)


    while se traduce como la palabra mientras.
*/

let pass = '';

/*
while(pass != 'hola'){
    pass = prompt('introdusca la contraseña');
}

console.log('fin del bucle');
*/


do{
    pass = prompt('introdusca la contraseña');
}while(pass != 'hola');