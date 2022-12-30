var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var INFO1 = lines.shift().split(` `);
var INFO2 = lines.shift().split(` `);

var id1 = INFO1.shift();
var Q1 = INFO1.shift();
var P1 = INFO1.shift();

var id2 = INFO2.shift();
var Q2 = INFO2.shift();
var P2 = INFO2.shift();

var Total = Q2 * P2 + Q1 * P1;

console.log(`VALOR A PAGAR: R$ ` + Total.toFixed(2));