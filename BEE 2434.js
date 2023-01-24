var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(` `);

var dia = parseInt(dados.shift());
var capital = parseInt(dados.shift());
var movimento;
var list = [];

while (dia >= 1) {
    movimento = capital + parseInt(lines.shift());

    list.push(movimento);

    capital = movimento;

    dia--;
}
var min = Math.min(...list);

console.log(min);