const notas = [];

notas[0] = 5;
notas[1] = 8;
notas[2] = 4;
notas[3] = 9;
notas[4] = 10;

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota;
}

const media = (soma / notas.length).toFixed(2);
console.log(media);