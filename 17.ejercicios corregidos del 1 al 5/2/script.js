let pregunta = prompt('de qué figura se quiere calcular el área?');


let base, altura, radio;


switch(pregunta){

    case "triangulo": 
        base = prompt('ingrese la base')
        altura = prompt('ingrese la altura')
        console.log(` El area del triangulo es  ${(base * altura) / 2}`);
    break;

    case "rectangulo": 
        base = prompt('ingrese la base')
        altura = prompt('ingrese la altura')
        console.log(` El area del rectangulo es ${base * altura}`);
    break;

    case "circulo": 
        radio = Number(prompt('ingrese el radio del circulo'));
        console.log(` El area del circulo es ${Math.round(Math.PI * Math.pow(radio, 2))}`);
    break;
    default:
        prompt('ingrese el nombre correspondiente');
        break
}



console.log(Math.sign(9));