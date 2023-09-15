const { argv } = require("process");

function multiplication (nbr1, exposant) {
	nbr1 = argv[2];
	exposant = argv[3];


	const resultat = parseInt(nbr1 * exposant);

	return resultat;
}

function puissance (nbr1, exposant) {
        nbr1 = argv[2];
        exposant = argv[3];


        const resultat = parseInt(nbr1 ** exposant);

        return resultat;
}

function puissancePow (nbr1, exposant) {
        nbr1 = argv[2];
        exposant = argv[3];


        const resultat = Math.pow(nbr1, exposant);

        return resultat;
}

//console.log(nbr1)
//console.log(exposant)
//console.log(typeof(nbr1, exposant))
console.log(multiplication());
console.log(puissance());
console.log(puissancePow());
