
let nombre = prompt('¿Cuál es tu nombre?');

while (!/^[a-zA-Z]+$/.test(nombre)) {
  nombre = prompt('Por favor, ingresa solo letras: ¿Cuál es tu nombre?');
}

let edad = prompt('¿Cuántos años tienes?');

while (!/^[0-9]+$/.test(edad)) {
  edad = prompt('Por favor, ingresa solo números: ¿Cuántos años tienes?');
}

let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');

while (!/^[a-zA-Z]+$/.test(lenguaje)) {
  lenguaje = prompt('Por favor, ingresa solo letras: ¿Qué lenguaje de programación estás estudiando');
}

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
alert("Genial! " + lenguaje + " es un lenguaje muy potente.");

let respuesta = prompt(`¿Te gusta estudiar otro lenguaje de programación ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO:`);

if (respuesta == 1) { 
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == 2) { 
  alert("Oh, qué pena... ¿Seria bueno que aprendas algo nuevo?");
} else { 
  alert("Respuesta inválida. Por favor, responde con 1 o 2.");
}
