var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var copos = lines.shift().split(` `);

var contagem = 1;

while ((contagem) <= 4) {
    var tentativa = parseInt(copos.shift());

    if (tentativa == 1) {
        console.log(contagem);
    }

    contagem++;
}