var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(` `);
var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

delta = Math.pow(B, 2) - 4 * A * C;

if (A !== 0 && delta > -1) {
    let R1 = (-B + Math.sqrt(delta)) / (2 * A);
    let R2 = (-B - Math.sqrt(delta)) / (2 * A);

    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}
else {
    console.log("Impossivel calcular");
}