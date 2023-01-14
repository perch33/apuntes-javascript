
// propiedad

let cadena = 'hola mundo';

// length -> devuelve la longitud de la cadena (la longitud son los caracteres que tiene)
// console.log(cadena.length);







// Métodos (los métodos tienen que llevar paréntesis, a veces los parentesis tienen que llevar algun parametro)

// Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.




// toUpperCase() -> Devuelve la cadena a mayúsculas
// let cadenaMayus = cadena.toUpperCase(); // guardando la variable en mayuscula
// let cadenaMayus = cadena.toUpperCase();
// console.log(cadena.toUpperCase());
// console.log(cadena);







// toLowerCase() -> Devuelve la cadena a minúsculas
// let cadenaMin = cadena.toLocaleLowerCase();
// console.log(cadena.toLowerCase());






// indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1
//el parámetro que pongamos es la palabra o el carácter a buscar, si encuentra nos va a poner su posición si no nos pondra en -1
// console.log(cadena.indexOf('hola'));
// console.log(cadena.indexOf('o'));//siempre devuelve la primera coincidencia









// replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo //cuando un metodo recibe varios parametros se separan con comas
// console.log(cadena.replace('mundo', 'percy'));









// substring(inicio [,fin] (el carácter de corchete significa que es opcional)  ) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)
// console.log(cadena.substring(3, 7));









// slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrásSi no se incluye el final extrae hasta el final (2,-4) -> Empieza a contar en el tercer carácter y los 4 últimos no los considera
// console.log(cadena.slice(-3));
// console.log(cadena.slice(0,-2));







// let cadena2 = 'hola youtube estamos trabajando con cadenas';

// trim()-> Elimina los espacios al inicio y al final de la cadena

// console.log(cadena2.trim());







// startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false

// console.log(cadena.startsWith('h'));
// console.log(cadena.startsWith('H'));
// console.log(cadena.startsWith('m', 5));






// endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuleve true o false

// console.log(cadena.endsWith('o'));
// console.log(cadena.endsWith('o', 4));
// console.log(cadena.endsWith('n', 8));
// console.log(cadena.endsWith('mundo'));








// includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false

// console.log(cadena.includes('a'));
// console.log(cadena.includes('a', 5));
// console.log(cadena.includes('a', 3));






// repeat(valor) -> Repite el string el número de veces que le indiquemos.


// let cadena3 = 'hola';

// console.log(cadena3.repeat(3));



/*template string */

let nombre = 'percy';
let apellido = 'chuzon';
let edad = 26;

console.log(`hola ${nombre} ${apellido}. tienes ${edad} años.`);
