let color = prompt("introduce un color").toLowerCase();

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

if (color.indexOf(colors) != -1) {
  console.log(`Tu color se encuentra en el array`);
} else {
  console.log(`Tu color no esta definido`);
}
