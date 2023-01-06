var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dados =lines.shift();
dados= dados.split(` `);

comp = dados.shift();
paper = dados.shift();
PC = dados.shift();

var Qnecessario = PC * comp;

if (Qnecessario <= paper){
    console.log(`S`);
}
else{
    console.log(`N`);
}