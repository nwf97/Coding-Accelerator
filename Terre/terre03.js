const { argv } = require("process");

let letter = argv[2].charCodeAt();
let lastLetter = 123;

while ( letter < lastLetter) {
	process.stdout.write(String.fromCharCode(letter));
	letter++;
}
process.stdout.write('\n');
