var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lados = parseInt(lines.shift());

var tri = lados - 2;

console.log(tri);