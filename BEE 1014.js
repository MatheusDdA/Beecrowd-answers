var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Km = parseInt(lines.shift());
var Li = parseFloat(lines.shift());

var KmL = Km / Li;

console.log(KmL.toFixed(3) + ` km/l`);