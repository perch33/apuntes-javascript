let num = parseInt(prompt("introduce un numero"));

let result = 1;

for(let i = num; i > 1; i--){
    result *=i
}

console.log(`el factorial de ${num} es ${result}`);