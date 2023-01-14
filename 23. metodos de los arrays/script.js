/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable, un elemento iterable es todo aquel que se puede recorrer, es decir un string o el mismo array

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor

.find() - devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada, si no existe devuelve undefined

.includes() - determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

*/

/* from */
/* 
let word = "hola mundo";

console.log(Array.from(word));
console.log(word.split('')); // si no le agregamos un espacio conseguimos el mismo resultado que el from, solo si se agrega el espacio se separan las palabras
 */

/* sort() */
/* const letters = ["b", "c", "z", "a"];
const numbers = [1, 8, 100, 200, 3];
console.log(letters.sort());
console.log(numbers.sort((a, b) => a - b));  */ //salen los números ordenados de menor a mayor (b-a) para que ordene el numero de mayor a menor
/* 
function menorMayor(a, b) {
  if (a - b < 0) return -1;
  if (a - b > 0) return 1;
  if (a == b) return 0;
}
function mayorMenor(a, b) {
  if (b - a < 0) return -1;
  if (b - a > 0) return 1;
  if (b == a) return 0;
} */

/* foreach */
/* const numbers = [12, 25, 47, 84, 98];

numbers.forEach((number) => console.log(number));
numbers.forEach((number, index, letra) =>
  console.log(`${number} esta en la posición ${index} y sus valores ${letra}`)
); */

/* let juegos = ['Zelda', 'mario', 'metroid', 'chrono'];
juegos.forEach((valorElement, indice, valor) =>{
    console.log({valorElement, indice, valor});
}) */

/* some y every*/

/* const words = ["html", "css", "javascript", "php"];


console.log(words.some(word => word.length > 2)); //true
console.log(words.every(word => word.length > 3));  */ //false porque css y php no tiene una longitud mayor de 3

/* map */

/* const numbers = [12, 25, 47, 84, 98];

const numbers2 = numbers.map((number) => number * 2);//para guardar en un array

numbers.map((number) => console.log(number * 2));

console.log(numbers2); 

//es igual al for of
for(const number of numbers){
  console.log(number*2)
}

*/

/* filter */

/* const numbers = [12, 25, 47, 84, 98];
numbers.filter((number) => number > 40);

const numbers2 = numbers.filter((number) => number > 40);

console.log(numbers2); */

/* reduce */

/* const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce((a, b) => a * b)); */

/* const user = [
  {
    name: "user 1",
    online: true,
  },
  {
    name: "user 2",
    online: true,
  },
  {
    name: "user 3",
    online: false,
  },
  {
    name: "user 4",
    online: true,
  },
  {
    name: "user 5",
    online: false,
  },
  {
    name: "user 6",
    online: false,
  },
];

const userOnline = user.reduce((cont, user) => {
  if (user.online) cont++;
  return cont;
},0);

console.log(`hay ${userOnline} usuarios conectados`); */

/* find() */

const array1 = [5, "percy2", 8, 130, "percy3"];

const found = array1.find((element) => element > 10);

const nombres = array1.find((nombre) => nombre == "percy");

console.log(nombres);

console.log(found);
// Expected output: 12




/* includes() */
/* 
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['react', 'percy', 'javascript'];

console.log(pets.includes('percy'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false */
