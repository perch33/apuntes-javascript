const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


const dni = prompt("ingresa tu numero de dni");

if (dni.length == 8 && parseInt(dni) > 0) {
  console.log(`tu dni completo es ${dni}${letras[dni % 23]}`);
}
