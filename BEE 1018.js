var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quantia = parseInt(lines.shift());
console.log(quantia);

let notas = parseInt(quantia/100);
console.log(notas + ` nota(s) de R$ 100,00`);
cedulas = quantia % 100;

notas = parseInt(cedulas/50);
console.log(notas + ` nota(s) de R$ 50,00`);
cedulas = cedulas % 50;

notas = parseInt(cedulas/20);
console.log(notas + ` nota(s) de R$ 20,00`);
cedulas = cedulas % 20;

notas = parseInt(cedulas/10);
console.log(notas + ` nota(s) de R$ 10,00`);
cedulas = cedulas % 10;

notas = parseInt(cedulas/5);
console.log(notas + ` nota(s) de R$ 5,00`);
cedulas = cedulas % 5;

notas = parseInt(cedulas/2);
console.log(notas + ` nota(s) de R$ 2,00`);
cedulas = cedulas % 2;

notas = parseInt(cedulas/1);
console.log(notas + ` nota(s) de R$ 1,00`);