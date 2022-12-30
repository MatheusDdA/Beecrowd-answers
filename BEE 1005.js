var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var Anf = A * 3.5;
var Bnf = B * 7.5;

var MEDIA =((Anf + Bnf)/11);

console.log(`MEDIA = ` + MEDIA.toFixed(5));