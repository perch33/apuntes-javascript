let num = parseInt(prompt("introduce un numero"));

let divisores = 0;


if (num == 1){
    console.log(`el numero 1 no es valido`)
} else{

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log(`${num} / ${i} es = ${num / i} no es primo`);
            divisores++
            break
        }
    }

}

if (divisores == 0){
    console.log(`${num} es primo`);
}