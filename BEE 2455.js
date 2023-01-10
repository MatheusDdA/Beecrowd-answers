var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var gangorra = lines.shift().split(` `);

var left = gangorra.shift() * gangorra.shift();
var right = gangorra.shift() * gangorra.shift();

if (left == right) {
    console.log(0);
}
else if (left > right) {
    console.log(-1);
}
else if (left < right) {
    console.log(1);
}