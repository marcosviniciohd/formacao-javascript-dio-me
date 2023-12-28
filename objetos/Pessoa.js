class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa('Marcos Vinício', 37);
const pessoa2 = new Pessoa('Daniela Oliveira', 28);

console.log(pessoa1);
console.log(pessoa2);