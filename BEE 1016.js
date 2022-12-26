var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const Qmin = (lines.shift() * 60) / 30;

console.log(Qmin + ` minutos`);