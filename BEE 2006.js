var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var cha = lines.shift();
const [pA, pB, pC, pD, pE] = lines.shift().split(` `);
var correct = 0;

if (cha == pA) {
    correct++;
}
if (cha == pB) {
    correct++;
}
if (cha == pC) {
    correct++;
}
if (cha == pD) {
    correct++;
}
if (cha == pE) {
    correct++;
}

console.log(correct);