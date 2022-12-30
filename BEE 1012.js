var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(` `);

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

var pi = 3.14159;

var questA = (A * C) / 2;
var questB = pi * Math.pow( C , 2);
var questC = (( A + B ) * C ) /2.0;
var questD = Math.pow(B , 2);
var questE = A * B;

console.log(`TRIANGULO: ` + questA.toFixed(3));
console.log(`CIRCULO: ` + questB.toFixed(3));
console.log(`TRAPEZIO: ` + questC.toFixed(3));
console.log(`QUADRADO: ` + questD.toFixed(3));
console.log(`RETANGULO: ` + questE.toFixed(3));