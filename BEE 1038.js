var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pedido = lines.shift().split(` `);

codigo = parseInt(pedido.shift());

quant = parseInt(pedido.shift());

var valorTotal;

switch (codigo) {
    case 1: valorTotal = 4.00 * quant; break;
    case 2: valorTotal = 4.50 * quant; break;
    case 3: valorTotal = 5.00 * quant; break;
    case 4: valorTotal = 2.00 * quant; break;
    case 5: valorTotal = 1.50 * quant; break;
}

console.log(`Total: R$ ${valorTotal.toFixed(2)}`);