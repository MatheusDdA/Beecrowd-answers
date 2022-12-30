var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

var X = N -1;

while (X !== 0) {
  var result = N * X;
  N = result;
  X--;
}

console.log(result);