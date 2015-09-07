var fs = require("fs");

var contentArray = fs.readFileSync(process.argv[2]).toString().split("\n");
var newLines = contentArray.length - 1;

console.log(newLines);