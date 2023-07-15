
const numero = 0;
// === não faz conversão implicita
const eNumeroPar = (numero % 2) === 0;
console.log(eNumeroPar);

// diferentimente do ==, que faz conversão implicita
// exemplo:
const numero2 = 20;
const eNumeroPar2 = (numero2 % 2) == '0';
console.log('Conversão implicita pelo == ' + eNumeroPar2);

if(numero){
    console.log('O número é par');
}else {
    console.log('Não é par');
}
