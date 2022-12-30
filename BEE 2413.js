var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var thirdLink = parseInt(lines.shift());

var secLink = thirdLink * 2;

var firstLink = secLink * 2;

console.log(firstLink);