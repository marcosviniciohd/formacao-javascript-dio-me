/* 
    Código condição de pagamento
    1 - À vista no débico, recebe 10% de desconto
    2 - À vista no dinherio ou PIX, recebe 15% de desconto
    3 - Em duas vezes, preço normal de etiqueta sem juros
    4 - Em três vezes, preço normal de etiqueta mais juros de 10%
*/

function calcularDesconto(valor, desconto) {
    return valor - (valor * (desconto / 1000));
}

function calcularJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 100;
const condicaoPagamento = 1;

if (condicaoPagamento === 1) {
    console.log('À vista no débito, recebe 10% de desconto ' + calcularDesconto(precoEtiqueta, 10));
} else if (condicaoPagamento === 2) {
    console.log('À vista no dinheiro ou PIX, recebe 15% de desconto ' + calcularDesconto(precoEtiqueta, 15));
} else if (condicaoPagamento === 3) {
    console.log('Em duas vezes, preço normal de etiqueta sem juros ' + precoEtiqueta);
} else if (condicaoPagamento === 4) {
    console.log('Em três vezes, preço normal de etiqueta mais juros de 10% ' + calcularJuros(precoEtiqueta, 10));
}