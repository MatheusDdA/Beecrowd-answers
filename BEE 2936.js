var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Cur = parseInt(lines.shift()) * 300;
var Boi = parseInt(lines.shift()) * 1500;
var Bot = parseInt(lines.shift()) * 600;
var Mapi = parseInt(lines.shift()) * 1000;
var Iar = parseInt(lines.shift()) * 150;

var gramas = Cur + Boi + Bot + Mapi + Iar + 225;

console.log(gramas);