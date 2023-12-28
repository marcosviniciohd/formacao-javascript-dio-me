class Pessoa2 {
    nome;
    peso;
    altura

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(nome, peso, altura){
        const imc = peso / (altura * altura);
        console.log(`O IMC de ${nome} é ${imc.toFixed(2)}`);
    }
}

const pessoa = new Pessoa2('Marcos Vinício', 72, 1.79);
console.log(pessoa);
pessoa.calcularIMC(pessoa.nome, pessoa.peso, pessoa.altura);