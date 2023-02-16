var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseFloat(lines.shift());

if (entrada >= 0 && entrada <= 25) {
    console.log(`Intervalo [0,25]`);
}
else if (entrada > 25 && entrada <= 50) {
    console.log(`Intervalo (25,50]`);
}
else if (entrada > 50 && entrada <= 75) {
    console.log(`Intervalo (50,75]`);
}
else if (entrada > 75 && entrada <= 100) {
    console.log(`Intervalo (75,100]`);
}
else {
    console.log(`Fora de intervalo`);
}