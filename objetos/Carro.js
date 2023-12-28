class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorK) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorK;
  }

  calcularGastoDePercurso(quantidadeKm, preçoCombustivel) {
    const gasto = quantidadeKm * this.gastoMedioPorKm * preçoCombustivel;
    console.log(`O gasto total será de R$ ${gasto.toFixed(2)}`);
  }
}

const carro1 = new Carro("Fiat", "Vermelho", 1 / 10);
console.log(carro1);
carro1.calcularGastoDePercurso(100, 5.79);
