var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());

var sec = tempo % 60;

var hour = parseInt((tempo / 60 ) /60);

var min =  parseInt((tempo / 60 ) %60);

console.log(hour + `:` + min + `:` + sec);