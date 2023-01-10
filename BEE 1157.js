var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const num = parseInt(lines.shift());
var tentativa = 1;

while (tentativa <= num) {
    var divisao = num % tentativa;
    if (divisao === 0) {
        console.log(tentativa);
    }

    tentativa++;
}