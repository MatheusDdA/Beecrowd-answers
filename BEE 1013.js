var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nums = lines.shift().split(` `);

var n1 = parseInt(nums.shift());
var n2 = parseInt(nums.shift());
var n3 = parseInt(nums.shift());

let AB;

if (n1 >= n2) {AB = n1}
else {AB = n2}

let ABC;

if (AB >= n3) {ABC = AB}
else{ABC = n3}

console.log(ABC + ` eh o maior`);