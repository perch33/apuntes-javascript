/* Bucles */

/* 
    Determinados
    bucle for of / for in
    for(let variable of estructura){
        Código a ejecutar
    }
    Palabras reservadas de bucles
        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

//el "for in" recorre al recorrer un array imprime el indice, pero su uso habitual es para objetos


let names = ['paco','jose', 'paula', 'maria']



for (let i = 0; i < names.length; i++){
    if (names[i] === 'paula'){
        break
    }
    console.log(names[i]);
}







for (let name of names){

    if(name === 'paula'){
        continue
    }

    console.log(name);
    //console.log(names.indexOf(name)); para sacar los indices
}






for (let index in names){


    if (names[index] === 'paula'){
        break
    }


    console.log(index);
    //console.log(names[index]); para sacar los nombres
}