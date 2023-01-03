var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var QBreak = parseInt(lines.shift());

var output = 0;

while (QBreak !== 0) {
    
    var linha = lines.shift();
    
    var NLinha = linha.split(` `);
    
    var conta = parseInt(NLinha.shift()) * parseInt(NLinha.shift());
    
    output += conta;

    QBreak--;
}

console.log(output);