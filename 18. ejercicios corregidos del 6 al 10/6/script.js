let suma = 0;

let cont = 0;

while (suma <= 50) {
  suma += parseInt(prompt("introduce un numero a la suma"));
  cont++;
}

console.log(`la suma total es de: ${suma}`);
console.log(`el total de numero introducidos es: ${cont}`);
