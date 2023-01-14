/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón

    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón

    mouseenter - cuando entramos en la zona que tiene el evento

    mouseleave - cuando salimos de la zona que tiene el evento

    mousedown - cuando pulsamos el boton izquierdo del ratón

    mouseup - cuando soltamos el boton izquierdo del ratón

    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button");
const input = document.getElementById("input");
const box = document.getElementById("box");

/* button.addEventListener("click", () => {
  console.log("hola");
}); */

/* button.addEventListener("dblclick", () =>{
    console.log("doble click");
} ) */

/* box.addEventListener("mouseenter", () => {
  //   box.style.background = "green";
  // box.classList.replace("red", "green");
  box.classList.add("green");
});

box.addEventListener("mouseleave", () => {
  // box.style.background = "red";
  box.classList.replace("green", "red");
//   box.classList.remove("green");
//   box.classList.add("red");
});
 */

/* box.addEventListener("mousedown", ()=>{
    console.log("has pulsado en la caja")
})

box.addEventListener("mouseup", ()=>{
    console.log("has soltado el boto izquierdo en la caja")
}) */

/* box.addEventListener("mousemove", () =>{
    console.log("estas moviendo el mouse en la caja")
}) */

input.addEventListener("keydown", () => {
  console.log("has pulsado una tecla");
});

input.addEventListener("keyup", () => {
  console.log("has soltado una tecla");
});

input.addEventListener("keypress", () => {
  console.log("estas pulsando una tecla");
});
