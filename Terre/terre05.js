const { argv } = require("process");

function division (a, b) {
	a = argv[2];
	b = argv[3];

	//const resultat = Math.trunc(a / b);
	const resultat = parseInt(a / b);

	return resultat;
}

function modulo (a, b) {
	a = argv[2];
	b = argv[3];

	const reste = a % b;

	return reste;
}

/*
console.log("le resultat " + division() + " est de type: " + typeof(division()));
console.log("le reste " + modulo() + " est de type: "+ typeof(modulo()));
*/

console.log("résultat: " + division() );
console.log("reste: " + modulo() );


/*
console.log(argv[2]);
console.log(argv[3]);
console.log(argv[2] / argv[3]);
console.log(argv[2] % argv[3]);
*/
