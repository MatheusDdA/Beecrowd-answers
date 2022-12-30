var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value = input.split(`\n`);
 
var A = parseInt(value.shift());
var B = parseInt(value.shift());

var C = A + B;

console.log(`SOMA = `+C);