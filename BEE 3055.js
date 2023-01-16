var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = parseInt(lines.shift());

var media = parseInt(lines.shift());

var p2 = (media * 2) - p1;

console.log(p2);