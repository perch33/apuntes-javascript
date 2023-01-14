const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

/* input.addEventListener('keyup', (e) =>{
    console.log(input.value); 
    console.log(e);
}) */

/* addEventListener('click', (e) =>{
    console.log(e);
}) */

/* button.addEventListener("click", (e) => {
  console.dir(e.target);  //para obtener la información y las propiedades
});
 */

/* const gallery = document.getElementById("gallery");

const gallery2 = document.querySelectorAll("gallery__item");

gallery.addEventListener("click", (e) => {
  // console.log(e.target.textContent); 
  e.target.classList.toggle("red");
}); */

/* gallery2.forEach((e) =>{
    console.log(e.target.textContent);
})
   */

const link = document.getElementById("link");

link.addEventListener("click", (e) => {
  e.preventDefault(); //evita su comportamiento por defecto
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("formulario enviado");
});

button.addEventListener("click", () => {
  input.value = "has hecho click";
  button.click(); //forzamos a que el evento suceda
});




//form.submit(); //para forzar el envío de formulario
