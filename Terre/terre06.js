const { argv } = require ("process");

//let string = argv[2];

//console.log(typeof(string));
//console.log(string);

/*for (let i of string) {
	console.log(i);
}*/

/*
for (let i = 0; i < string.length; i++) {
	process.stdout.write(string[i]);
}
process.stdout.write('\n');

console.log("ma variable est de type: " + typeof(string));
*/

for (let i = 0; i < argv.length; i++) {
	if ( i > 1) {
	//console.log(argv[i].join(' '));
	console.log(argv[i]);
	}
}
