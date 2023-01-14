let numero = parseInt(prompt('ingresa el numero'));

for(let i = 1; i <= numero; i++){
    if(i % 2 == 0){
        console.log(`${i} es par`);
    }else{
        console.log(`${i} es impar`);
    }
}