var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var list = lines.shift().split(` `);
var A = parseInt(list.shift());
var B = parseInt(list.shift());
var C = parseInt(list.shift());
var D = parseInt(list.shift());

if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
    console.log(`Valores aceitos`);
}
else {
    console.log(`Valores nao aceitos`);
}