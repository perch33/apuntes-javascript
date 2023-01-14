const button = document.getElementById("button");

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()//no se recomienda usar porque no carga la pagina completa, la hace después
    confirm()
*/
/* addEventListener("load", (e) => {
  console.log(e);
}); */





/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir() //despliega la información del elemento
    console.error()
    console.table()
*/



const person = {
  name: "percy",
  age: 30,
  email: "contacto@percychuzon.com",
};

//console.table(person); //sirve mucho para visualizar un objeto




/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

/* console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash); */


// location.href = "https://www.google.com/"; forma de redirigir la pagina via javascript
// location.reload(); recarga la pagina de manera indefinida

/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back() //para ir atrás
    forward() // para ir hacia adelante
    go(n|-n)
    length
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

/*
Timers

//se ejecuta una sola vez
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la función después de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
//se ejecuta cada segundo según dado
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* button.addEventListener("click", () => {
  //setTimeout(saludar, 3000); //cuando la función es externa, no se lanza la función (setTimeout(()=>{code}, delay-in-milliseconds))

 //setTimeout(() => {
 //   console.log("adios");
 // }, 3000); 

  //clearTimeout(timeout) // si declaramos como función flecha
}); */

/* const timeout = setTimeout(() => {
    console.log('ADIOS');
}, 3000)
button.addEventListener('click', () => {
    clearTimeout(timeout)
}) */

/* const saludar = () => {
  console.log("hola");
};

let cont = 0; */

//const interval = setInterval(saludar, 3000)

/* const interval = setInterval(() => {
  console.log(cont);
  cont++;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});
 */