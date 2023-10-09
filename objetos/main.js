class Pessoa {
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Marcos';
pessoa1.idade = 37;
console.log(pessoa1);


const pessoa2 = new Pessoa();
pessoa2.nome = 'Daniela';
pessoa2.idade = 28;
console.log(pessoa2);

pessoa1.descrever();
pessoa2.descrever();