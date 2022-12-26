var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var Anf = A * 2;
var Bnf = B * 3;
var Cnf = C * 5;

var MEDIA = ((Anf + Bnf + Cnf)/10);

console.log(`MEDIA = ` + MEDIA.toFixed(1));