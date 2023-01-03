var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var final = parseInt(lines.shift());

var contagem = 1;

while (contagem <= final) {
   console.log(`${contagem} ${Math.pow(contagem, 2)} ${Math.pow(contagem, 3)}`);
   
   contagem++;
}