
let tecnologias = [];

document.getElementById("boton-limpiar").addEventListener("click", function() {
	tecnologias = [];
	document.getElementById("elegidos").innerHTML = "";
	alert("Se han eliminado las tecnologías seleccionadas.");
});

document.getElementById("boton-empezar").addEventListener("click", function() {
	document.getElementById("contenido").style.display = "block";
});

document.getElementById("boton-front-end").addEventListener("click", function() {
	let framework = prompt("¿Quieres aprender React o Angular? (React/Angular)");

	if (framework.toLowerCase() === "react") {
		tecnologias.push("React");
		alert("Excelente elección! React es un framework muy popular.");
	} else if (framework.toLowerCase() === "angular") {
		tecnologias.push("Angular");
		alert("Buena elección! Angular es un framework muy potente.");
	}
});

document.getElementById("boton-back-end").addEventListener("click", function() {
	let lenguaje = prompt("¿Quieres aprender Python o Java? (Python/Java)");

	if (lenguaje.toLowerCase() === "python") {
		tecnologias.push("Python");
		alert("Excelente elección! Python es un lenguaje muy versátil.");
	} else if (lenguaje.toLowerCase() === "java") {
		tecnologias.push("Java");
		alert("Buena elección! Java es un lenguaje muy popular.");
	}
});

document.getElementById("boton-seleccionados").addEventListener("click", function() {
	let contenido = "";
	tecnologias.forEach(function(tecnologia) {
		contenido += `<p>${tecnologia}</p>`;
	});
	document.getElementById("elegidos").innerHTML = contenido;
});
