var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(` `);
var p1 = parseFloat(dados.shift()) * 2;
var p2 = parseFloat(dados.shift()) * 3;
var p3 = parseFloat(dados.shift()) * 4;
var p4 = parseFloat(dados.shift()) * 1;

var media = (p1 + p2 + p3 + p4) / 10;

if (media >= 7.0) {
    console.log(`Media: ` + media.toFixed(1));
    console.log(`Aluno aprovado.`);
}
else if (media < 5.0) {
    console.log(`Media: ` + media.toFixed(1));
    console.log(`Aluno reprovado.`);
}
else {
    console.log(`Media: ` + media.toFixed(1));
    console.log(`Aluno em exame.`);

    var pf = parseFloat(lines.shift());
    console.log(`Nota do exame: ` + pf.toFixed(1));

    var Nmedia = (pf + media) / 2;

    if (Nmedia >= 5.0) {
        console.log(`Aluno aprovado.`);
        console.log(`Media final: ` + Nmedia.toFixed(1));
    }
    else {
        console.log(`Aluno reprovado.`);
        console.log(`Media final: ` + Nmedia.toFixed(1));
    }
}