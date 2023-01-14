/*Arrays

son estructuras que nos permiten almacenar varios datos y agruparlos.

se pueden llenar con cualquier tipo de dato valido en javascript y deben ir separados por comas.

se pueden mezclar tipos de datos, pero no es recomendable.

se declaran con llave cuadradas o corchetes.

pueden declararse vacíos o con un contenido establecido

pueden añadirse o eliminarse elementos en el momento que queramos


let = 5;

let array = []

let numero = [1,2,3,4,5]

cada uno de los elementos podrá ser identificado por su indice, es decir su posición

los indices empiezan a contar desde 0 */


let numeros = [1,2,3,4,5];

let palabras = ['hola', 'estamos','en', 'youtube'];


let booleans=[true, true, false];
console.log(numeros[0]+numeros[1]);

console.log(`la palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

console.log(numeros);