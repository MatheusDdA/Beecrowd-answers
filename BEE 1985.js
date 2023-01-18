var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var q = parseInt(lines.shift());

var total = 0;

while (q !== 0) {
    var conta = lines.shift().split(` `);

    var code = conta.shift();
    var qItem = parseInt(conta.shift());
    var valor;

    if (code == 1001) { valor = parseFloat(1.50) }
    else if (code == 1002) { valor = parseFloat(2.50) }
    else if (code == 1003) { valor = parseFloat(3.50) }
    else if (code == 1004) { valor = parseFloat(4.50) }
    else if (code == 1005) { valor = parseFloat(5.50) }

    total += parseFloat(valor * qItem);

    q--;
}

console.log(total.toFixed(2));