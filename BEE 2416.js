var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(` `);

var Lrun = entrada.shift();
var pista = entrada.shift();

console.log(Lrun % pista);