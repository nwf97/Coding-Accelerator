const { argv } = require("process");
const path = require('path');

console.log(path.basename(argv[1]));
