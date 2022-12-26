var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Nfuncionario = parseFloat(lines.shift());
var HTrabalhada = parseFloat(lines.shift());
var SporH = parseFloat(lines.shift()).toFixed(2);

var salary = HTrabalhada * SporH;

console.log(`NUMBER = ` + Nfuncionario);
console.log(`SALARY = U$ ` + salary.toFixed(2));