const etanol = 3.89;
const gasolina = 5.29;
const tipoCombustivel = 'Etanol';

//Consumo do carro
const consumoDoCarroComGasolinaEmKm = 10;
const consumoDoCarroComEtanolEmKm = 7.5;

// Calculos para descobrir o consumo por distancia;
const distanciaEmKm = 500;

const consumoEmGasolina = distanciaEmKm / consumoDoCarroComGasolinaEmKm;
const valorGastoEmGasolina = consumoEmGasolina * gasolina;
const consumoEmEtano = distanciaEmKm / consumoDoCarroComEtanolEmKm;
const valorGastoEmEtanol = consumoEmEtano * etanol;

console.log('Valor gasto em reais com cosumo em gasolina ' + valorGastoEmGasolina.toFixed(2));
console.log('Valor gasto em reais com cosumo em etanol ' + valorGastoEmEtanol.toFixed(2));

