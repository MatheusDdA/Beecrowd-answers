var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var casos = parseInt(lines.shift());

while(casos !== 0){
    var fios = lines.shift().split(` `);
  
    var R1 = parseInt(fios.shift());
    var R2 = parseInt(fios.shift());
    
    console.log(R1 + R2);
    
    casos--;
}