var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var cartas = lines.shift().split(` `);

var carta1 = parseInt(cartas.shift());
var carta2 = parseInt(cartas.shift());

if (carta1 == carta2) {
    console.log(carta1);
}
else if (carta1 > carta2) {
    console.log(carta1);
}
else {
    console.log(carta2);
}