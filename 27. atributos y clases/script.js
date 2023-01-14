/* 
Atributos
    element.getAttribute('attribute') //devuelve el atributo del html

    element.setAttribute('attribute', value) //asigna un valor al atributo html

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class') //comprueba si esa clase existe
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.getElementById("title");

const nombre = document.getElementById("name");

//console.log(nombre.getAttribute("type"));
//nombre.setAttribute("type", "number")

//title.classList.add("main-title", "other-title");
if (title.classList.contains("title")) {
  console.log("title tiene la clase title");
} else {
  console.log("title no tiene la clase title");
}

console.log(title.textContent);
console.log(nombre);
