// Nombre premier

const { argv } = require("process");

const Nbr = parseInt(argv[2]);

if (Nbr <= 1 ) {
	console.log("Non, "+Nbr+" n'est pas un nombre premier.")
}
