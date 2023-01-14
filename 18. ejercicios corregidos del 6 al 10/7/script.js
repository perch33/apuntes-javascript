let numero = [3,7,11,22,9];

let pares =[];

let impares =[];

let oper;

for(let i = 0; i < numero.length; i++){

    let date = numero[numero.length-1];

    let aleatorio = Math.round(Math.random() * (10-1)+1);

   oper = date  * aleatorio;


    if(oper % 2 == 0){
        pares.push(oper);
        console.log(`${date} x ${aleatorio} = ${oper} es par`)
    }else{
        impares.push(oper);
        console.log(`${date} x ${aleatorio} = ${oper} es impar`)
    }

}

console.log(pares);
console.log(impares);