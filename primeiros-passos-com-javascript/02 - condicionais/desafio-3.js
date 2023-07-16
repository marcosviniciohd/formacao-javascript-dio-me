const nota1 = 5;
const nota2 = 7;
const nota3 = 8;

const mediaDeNotas = (nota1 + nota2 + nota3 ) / 3;

if(mediaDeNotas < 5){
    console.log('Você está reprovado!');
}else if(mediaDeNotas >= 5 && mediaDeNotas <= 7){
    console.log('Você está de recuperação');
}else{
    console.log('Parabéns! Você foi aprovado.');
}