const { argv } = require("process");

function division (a, b) {
	a = argv[2];
	b = argv[3];

	const resultat = parseInt(a / b);

	return resultat;
}

function modulo (a, b) {
	a = argv[2];
	b = argv[3];

	const reste = a % b;

	return reste;
}

if ( argv[2] < 1 || argv[3] < 1 || argv[2] < argv[3]) {
	console.log("erreur.")
}
else {
	console.log("résultat: " + division() );
	console.log("reste: " + modulo() );
}

// Syntaxe ternaire condition ? exprSiVrai : exprSiFaux
