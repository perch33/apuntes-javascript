/*
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

    Página para evaluar expresiones regulares: https://regex101.com/
    sintaxis:

        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayúsculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia

    Comodines:
        -Sustitución: Define un comodín dentro del patron. El símbolo es el "." // i..um cada punto equivale a cualquier carácter

        -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos. 
        [aeiou] Con esto cogeríamos todas las vocales

        -Rangos: Entre corchetes si ponemos un guion entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas. desde la letra a hasta la z

        Tabla ASCII https://ascii.cl/es/
        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"
        -Cadenas completas:
            Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"

    Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ Después de este símbolo no puede haber nada
        ^hola$  //solo selecciona la palabra hola
        hola? //no es seleccionado

    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces y sin máximo
        ^[a-zA-Z]{1,3}@{1}$

        -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*

        -interrogación "?": Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
            ^[ae]?$ 

        - operador +: lo que está antes del + tiene que estar una vez como mínimo
        A-[0-9]+
    
    Caracteres:
    //en minúscula admite y mayuscula no admite
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$

        \S: Coincide con todo menos caracteres de espacio ^\S{5}$

        \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$

        \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$

        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guion bajo. Equivalente a [A-Za-z0-9_] ^\w+@$

        \W: Coincide con todo menos caracteres de palabra. ^\W+$
       
*/

/* test() - ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false */
/* \. la barra indica que se use el carácter o letra como el que representa (el punto por ejemplo) */

const text = document.getElementById("text").textContent;
const regEx = /lorem/gi;
/* otra forma de usar las expresiones regulares */
const regEx2 = new RegExp("lorem", "gi");
const regEx3 = new RegExp("/lorem/", "gi");

console.log(regEx.test(text)); //devuelve true o false
console.log(text.includes("Lorem")); //obtendríamos el mismo resultado pero no es el adecuado
