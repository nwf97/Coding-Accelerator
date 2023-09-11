const { argv } = require("process");

let argument = argv[2]
let error = "Tu ne me la mettras pas à l'envers.";
let pair = "Pair";
let impair = "Impair";

if (argument%2 == 0 && argument > 0) {
console.log(pair);
}
else if(argument%2 == 1) {
console.log(impair);
}
else {
console.log(error)
}

