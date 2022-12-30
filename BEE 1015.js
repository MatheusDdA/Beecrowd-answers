var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = (lines.shift().split(` `));
var p2 = (lines.shift().split(` `));

var xp1 = parseFloat(p1.shift());
var yp1 = parseFloat(p1.shift());

var xp2 = parseFloat(p2.shift());
var yp2 = parseFloat(p2.shift());

var Dp1p2 = Math.sqrt(Math.pow(xp2-xp1 , 2) + (Math.pow(yp2-yp1 , 2)));

console.log(Dp1p2.toFixed(4));