const { argv } = require ("process");

let string = argv[2];
let newString = "";

for (let i = string.length -1 ; i >= 0; i--) {
	newString = newString + string[i];
}
console.log(newString);

