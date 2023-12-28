class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Marcos Vinício';
pessoa1.idade = 37;

console.log(pessoa1.descrever());