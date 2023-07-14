
/* 
    1 - Preço do combustível
    2 - Média de consumo do carro
    3 - Distância da viagem
*/

const precoCombustivel = 5.79;
const quantKmPorLitro = 10.0;
const distanciaEmKM = 400;

let calc = distanciaEmKM / quantKmPorLitro * precoCombustivel;
console.log(calc.toFixed(2));

