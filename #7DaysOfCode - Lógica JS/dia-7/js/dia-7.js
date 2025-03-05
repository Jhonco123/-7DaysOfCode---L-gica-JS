
function suma(a, b) {
	return a + b;
  }
  
  function resta(a, b) {
	return a - b;
  }
  
  function multiplicacion(a, b) {
	return a * b;
  }
  
  function division(a, b) {
	if (b === 0) {
	  return "No se puede dividir por cero";
	}
	return a / b;
  }
  
  function calculadora() {
	let opcion = prompt("Elige una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");
	let num1, num2;
  
	switch (opcion) {
	  case "1":
		num1 = parseFloat(prompt("Ingrese el primer número"));
		num2 = parseFloat(prompt("Ingrese el segundo número"));
		alert(`La suma es: ${suma(num1, num2)}`);
		break;
	  case "2":
		num1 = parseFloat(prompt("Ingrese el primer número"));
		num2 = parseFloat(prompt("Ingrese el segundo número"));
		alert(`La resta es: ${resta(num1, num2)}`);
		break;
	  case "3":
		num1 = parseFloat(prompt("Ingrese el primer número"));
		num2 = parseFloat(prompt("Ingrese el segundo número"));
		alert(`La multiplicación es: ${multiplicacion(num1, num2)}`);
		break;
	  case "4":
		num1 = parseFloat(prompt("Ingrese el primer número"));
		num2 = parseFloat(prompt("Ingrese el segundo número"));
		alert(`La división es: ${division(num1, num2)}`);
		break;
	  case "5":
		alert("Hasta la próxima");
		return;
	  default:
		alert("Opción no válida");
	}
	calculadora();
  }
  
  document.getElementById("boton-calculadora").addEventListener("click", calculadora);
  