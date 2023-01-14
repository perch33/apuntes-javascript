/*se utiliza para elegir un camino de varios preestablecidos, tenemos 2 tipos principales: */

/*
estructura switch

sintaxis simple:

    switch (evaluacion){

       case n1:

    //codigo

      break;

       case n2:

    //codigo

      break;

       default:

    //codigo

}
*/




/*
estructura switch

sintaxis multiple:

switch (evaluacion){


case n1:

case n2:

case n3:

//codigo

break;

default:

//codigo

}
*/

let num = 4;

switch(num){
    case 1: console.log('num tiene el valor 1')
    break;
    case 2: console.log('num tiene el valor 2')
    break;
    default: console.log('num no vale ni 1 ni 2');
}



switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
        case 1:
    case 2:
    case 4:
        console.log(`${num} es par`)
}