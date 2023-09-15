const { argv } = require("process");

function racineCarre (a) {
	a = argv[2];

	const resultat = parseInt(a**0.5);
	return resultat;
}

console.log("La racine carrée de " + argv[2] + " est: " + racineCarre() +".");

// tips : Newton Raphson Algorithm
