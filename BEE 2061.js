var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var AA = lines.shift().split(` `);

var abas = parseInt(AA.shift());
var action = parseInt(AA.shift());

while (action > 0) {
    var x = lines.shift();
    
    if (x == "fechou") {
        abas += 1;
    }
    else{
        abas--;
    }
    action--;
}
console.log(abas);