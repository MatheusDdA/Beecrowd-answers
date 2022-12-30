var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var td = lines.shift();

var year = parseInt(td / 365);
console.log(year + ` ano(s)`);

var MandD = parseInt(td % 365);

var month = parseInt( MandD / 30 );
console.log(month + ` mes(es)`);

var days = parseInt( MandD % 30 );
console.log(days + ` dia(s)`);