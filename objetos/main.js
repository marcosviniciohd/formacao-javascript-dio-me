class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`);
    }
}

const pessoa1 = new Pessoa('Marcos Vinício', 37);
console.log(pessoa1);


const pessoa2 = new Pessoa('Daniela Oliveira', 28);
console.log(pessoa2);

pessoa1.descrever();
pessoa2.descrever();