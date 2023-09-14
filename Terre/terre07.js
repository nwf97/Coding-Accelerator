const { argv } = require("process");

function strLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

if (argv.length !== 3 || typeof argv[2] !== 'string') {
    console.log('erreur.');
} else {
    console.log(strLength(argv[2]));
}

