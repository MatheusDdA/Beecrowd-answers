var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var X = 1;

while (X <= N) {
    console.log(X + ` ` + Math.pow(X, 2) + ` ` + Math.pow(X, 3));
    console.log(X + ` ` + (Math.pow(X, 2) + 1) + ` ` + (Math.pow(X, 3) + 1));
    X++;
}