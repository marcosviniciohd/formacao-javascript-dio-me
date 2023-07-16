const alturaEmCentimetros = 1.79;
const pesoEmKilogramas = 73;
const IMC = pesoEmKilogramas / (alturaEmCentimetros * alturaEmCentimetros);

if(IMC < 18){
    console.log(IMC.toFixed(2) +' Você está abaixo do peso ideal, procure um nutricionista.');
}else if(IMC >= 18 && IMC <= 23){
    console.log(IMC.toFixed(2) +' Você está dentro do peso ideal');
}else if (IMC > 23 && IMC <= 25){
    console.log(IMC.toFixed(2) + ' Você está acima do peso, procure um profissional especializado em nutrição');
}else{
    console.log(IMC.toFixed(2) +' Você está com obesidade grau II');
}