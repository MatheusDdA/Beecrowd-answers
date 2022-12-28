var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quantia = lines.shift();

console.log(`NOTAS:`);

let notas = quantia / 100;
console.log(parseInt(notas)+ ` nota(s) de R$ 100.00`);
quantia = quantia % 100;

notas = quantia / 50;
console.log(parseInt(notas)+ ` nota(s) de R$ 50.00`);
quantia = quantia % 50;

notas = quantia / 20;
console.log(parseInt(notas)+ ` nota(s) de R$ 20.00`);
quantia = quantia % 20;

notas = quantia / 10;
console.log(parseInt(notas)+ ` nota(s) de R$ 10.00`);
quantia = quantia % 10;

notas = quantia / 5;
console.log(parseInt(notas)+ ` nota(s) de R$ 5.00`);
quantia = quantia % 5;

notas = quantia / 2;
console.log(parseInt(notas)+ ` nota(s) de R$ 2.00`);
quantia = quantia % 2;

console.log(`MOEDAS:`);

notas = quantia / 1;
console.log(parseInt(notas)+ ` moeda(s) de R$ 1.00`);
quantia = (quantia % 1).toFixed(2);

notas = quantia / 0.50;
console.log(parseInt(notas)+ ` moeda(s) de R$ 0.50`);
quantia = (quantia % 0.50).toFixed(2);

notas = quantia / 0.25;
console.log(parseInt(notas)+ ` moeda(s) de R$ 0.25`);
quantia = (quantia % 0.25).toFixed(2);

notas = quantia / 0.10;
console.log(parseInt(notas)+ ` moeda(s) de R$ 0.10`);
quantia = (quantia % 0.10).toFixed(2);

notas = quantia / 0.05;
console.log(parseInt(notas)+ ` moeda(s) de R$ 0.05`);
quantia = (quantia % 0.05).toFixed(2);

notas = quantia / 0.01;
console.log(parseInt(notas)+ ` moeda(s) de R$ 0.01`);