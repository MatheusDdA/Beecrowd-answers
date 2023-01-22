var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var mult;

while (mult !== 0) {
    var casos = lines.shift().split(` `);

    mult = parseInt(casos.shift());
    var exp = parseInt(casos.shift());

    if (mult !== 0) {
        console.log(mult * exp);
    }
}