function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return  'Seu IMC é ' + imc.toFixed(2) + ' peso normal';
    } else if (imc >= 25 && imc < 30) {
        return  'Seu IMC é ' + imc.toFixed(2) + ' acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return  'Seu IMC é ' + imc.toFixed(2) + ' você está obeso';
    } else {
        return  'Seu IMC é ' + imc.toFixed(2) + ' você está com obsidade grave';
    }
}

// Função principal, imediatamente invocada.
// Função anonima, sem nome.

(function () {
    const peso = 110;
    const altura = 1.79;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();

//main();