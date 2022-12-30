var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var hours = lines.shift();
var Kmh = lines.shift();

var litros = parseFloat( ( Kmh / 12 ) * hours);

console.log(litros.toFixed(3));