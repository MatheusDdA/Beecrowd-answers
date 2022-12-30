var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var PD = parseInt(lines.shift());

var PR = parseInt(lines.shift());

var variation = PD - PR;

console.log(variation);