var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vendedor = lines.shift();
var salary = parseFloat(lines.shift());
var bonus = parseFloat(lines.shift());

var TotalSalary = salary + (bonus * 0.15);

console.log(`TOTAL = R$ ` + TotalSalary.toFixed(2));