
let numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intentos = 3;

function adivinarNumero() {
	let numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 10"));

	if (numeroIngresado === numeroAleatorio) {
		alert("¡Felicitaciones! Adivinaste el número.");
	} else {
		intentos--;
		alert(`Intentos restantes: ${intentos}. El número que ingresaste es incorrecto.`);

		if (intentos > 0) {
			adivinarNumero();
		} else {
			alert(`¡Lo siento! No adivinaste el número. El número correcto era ${numeroAleatorio}.`);
		}
	}
}

function iniciarJuego() {
	alert("Bienvenido al juego de adivinar el número.");
	alert("Tienes 3 intentos para adivinar el número correcto.");
	adivinarNumero();
}

document.getElementById("boton-iniciar").addEventListener("click", iniciarJuego);

