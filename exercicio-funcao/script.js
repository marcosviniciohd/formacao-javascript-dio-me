// Objetivo: exercicio de fixação de funções
// Escreva uma função que receba um nome e imprima no console "Seu nome é: " + nome

function escreverNome(nome) {
  return `Seu nome é ${nome}`;
}

// escreverNome("João");
// escreverNome("Maria");

// Escreva uma função que verifique sua idade e imprima no console se você é maior ou menor de idade. 
// Para isso, a função deve receber um parâmetro idade que será a idade a ser verificada.
function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(escreverNome('Marcos') + " e você é maior de idade");
  } else {
    console.log(escreverNome('João') + " e você é menor de idade");
  }
}

verificaIdade(20);
verificaIdade(15);
