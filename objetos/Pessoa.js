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

// console.log(pessoa1);
// console.log(pessoa2);

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade < p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
       console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`); 
    }
}

compararPessoas(pessoa1, pessoa2);