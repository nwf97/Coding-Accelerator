const { argv } = require("process");

function division (a, b) {
	a = argv[2];
	b = argv[3];

	// const resultat = math.trunc(a / b)
	const resultat = parseInt(a / b);

	return resultat;
}

function modulo (a, b) {
	a = argv[2];
	b = argv[3];

	const reste = parseInt(a % b);

	return reste;
}
// Ajouter cas output NaN (Ne fonctionne pas pour l'instant)
function notAnumber(a, b) {
        a = argv[2];
        b = argv[3];

    if (isNaN(a) || isNaN(b)) {
        return "Erreur.";
	}
	return null;
}


if ( argv[3] === 0 || argv[2] < argv[3] ) {
	console.log("erreur.")
}
else {
	console.log("résultat: " + division());
	console.log("reste: " + modulo());
}
