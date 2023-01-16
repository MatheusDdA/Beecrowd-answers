var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var colocacao = parseInt(lines.shift());

if (colocacao <= 1) {
    console.log(`Top 1`);
}
else if (colocacao <= 3 && colocacao > 1) {
    console.log(`Top 3`);
}
else if (colocacao <= 5 && colocacao > 3) {
    console.log(`Top 5`);
}
else if (colocacao <= 10 && colocacao > 5) {
    console.log(`Top 10`);
}
else if (colocacao <= 25 && colocacao > 10) {
    console.log(`Top 25`);
}
else if (colocacao <= 50 && colocacao > 25) {
    console.log(`Top 50`);
}
else if (colocacao <= 100 && colocacao > 50) {
    console.log(`Top 100`);
}